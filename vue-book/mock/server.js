let http=require("http");
let url=require("url");
let fs=require("fs");
function read(callback) {
  //读取books.json里面的数据
  fs.readFile('./book.json','utf8',function (err,data) {
    //读取完成是字符串
      if(err|| data===''){
        return callback([])
      }
      callback(JSON.parse(data))
  })
}
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),'utf8',callback)
}

let sliders=require("./sliders");
http.createServer(function (req,res) {
let {pathname,query}=url.parse(req.url,true);
let id=parseInt(query.id);
let onebook=parseInt(query.book);
if(pathname==="/api/sliders"){
  res.end(JSON.stringify(sliders));
}else if(pathname==="/api/hot"){
    read(function (books) {
      //取倒序6本书,reverse()倒序数组
      books=books.reverse().slice(0,6);
      res.end(JSON.stringify(books));
  })
}else if(pathname==="/api/book"){
    switch(req.method){
      case "GET":  //查询一个返回数据
        if(id){
          read(function (books) {
              let book=books.find(book=>book.id==id);
              res.end(JSON.stringify(book));
          })
        }else{
          read(function (books) {
            books=books.reverse();
            res.end(JSON.stringify(books));
          })
        }
        break;
      case "POST":

          let str="";
          //获取前台传过来的数据
          req.on("data",function (chunk) {
              str+=chunk;
          })
          //读取结束
          req.on("end",function () {
            //将前台传过来的数据改成对象
            let modifybook=JSON.parse(str);
            //读取当前的数据库里面所有的数据
            read(function (books) {
              modifybook.id=books.length>0?books[books.length-1].id+1:1
              //将前台数据，添加到当前数据库里面去，生成一个全新大的数据库
              books.push(modifybook);
              //将新数据写入
              write(books,function () {
                //将新数据返回给前台
                //JSON.stringify(modifybook)
                res.end('成功');
              })
            })
          })


        break;
      case "PUT":
        {
        let str='';
        req.on('data',function (chunk) {
            str+=chunk;
        });
          req.on('end',function () {
              let bookItem=JSON.parse(str);
              read(function (books) {
                books=books.map(book=>{
                  if(book.id==id){
                    return bookItem
                  }
                  return book;
                });
                write(books,function () {
                  res.end(JSON.stringify(bookItem))
                })
              })
          })
        }
        break;
      case "DELETE":
        if(id){
          read(function (books) {
              books=books.filter(book=>book.id!==id);
              write(books,function () {
              //将新数据返回给前台
              //JSON.stringify(modifybook)
               res.end(JSON.stringify({}));
            })
          })
        }
        break;
    }
}
}).listen(3000)
