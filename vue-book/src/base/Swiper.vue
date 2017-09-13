<template>
    <div>
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide class="slider-item" v-for="(src,index) in data" :key="index">
          <img :src="src" alt="图片">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div style="clear:both"></div>
      </swiper>
    </div>
</template>
<script>
    export default {
      props:['data'],
        data() {
            return {
              swiperOptions:{
                //设置父级的盒子大小
                setWrapperSize :true,
                //监控父级大小变化
                observeParents:true,
                pagination : '.swiper-pagination',
              }
            }
        },
        created() {
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>
<style scoped>
    .slider-item img{
      width:100%;
    }

</style>
