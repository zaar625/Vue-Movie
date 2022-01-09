<template>
  <div class="hero-slide">
    <Swiper
      class="a"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in movieItems">
        <img :src="image(item.backdrop_path)" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import './hero-slide.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
import axios from 'axios';
import { apiConfig } from '../../api/apiConfig';

SwiperCore.use([Autoplay]);
import 'swiper/swiper.min.css';

export default {
  data() {
    return {
      movieItems: [],
      backgroundImages: '',
    };
  },
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
  created: function () {
    const getMovie = async () => {
      const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&sort_by=popularity.desc&include_adult=false&page=1`);
      console.log(data);
      this.movieItems.push(...data.results.slice(1, 4));
      console.log(this.movieItems);
    };
    getMovie();
  },
  methods: {
    image(image) {
      return apiConfig.originalImage(image);
    },
  },
};
</script>

<style>
.a {
  color: white;
}
.b {
  height: 500px;
}
</style>
