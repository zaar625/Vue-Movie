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
      <!-- <SwiperSlide>
        <div class="a">안녕하세요</div>
        <div class="hero-slide__item">
          <div className="hero-slide__item__content container">
            <div className="hero-slide__item__content__info">
              <h2 className="title">타이틀</h2>
              <div className="overview">오버뷰</div>
              <div className="btns"></div>
            </div>
            <div className="hero-slide__item__content__poster">
              <img />
            </div>
          </div>
        </div>
      </SwiperSlide> -->
    </Swiper>
  </div>
</template>

<script>
import './hero-slide.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

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
