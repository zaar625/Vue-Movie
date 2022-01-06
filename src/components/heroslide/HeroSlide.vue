<template>
  <div class="hero-slide">
    <Swiper
      class="a"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-slot="{ isActive }">
        <div>slide1 {{ isActive ? 'active' : 'not active' }}</div>
      </swiper-slide>
      <swiper-slide v-slot="{ isActive }">
        <div>slide12 {{ isActive ? 'active' : 'not active' }}</div>
      </swiper-slide>
      <swiper-slide v-slot="{ isActive }">
        <div>slide13{{ isActive ? 'active' : 'not active' }}</div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import './hero-slide.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore, { Autoplay } from 'swiper';
// SwiperCore.use([Autoplay]);
import 'swiper/swiper.min.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style>
.a {
  color: white;
}
</style>
