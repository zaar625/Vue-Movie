<template>
  <div class="movie-list">
    <Swiper
      :slides-per-view="'auto'"
      :space-between="10"
      :grab-cursor="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="trendingTV in trendingTVs" v-bind:key="trendingTV">
        <MovieCard :item="trendingTV" :category="category" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import './movie-list.scss';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import MovieCard from '../movie-card/MovieCard.vue';

export default {
  data() {
    return {
      trendingTVs: [],
      category: '/tv',
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    MovieCard,
  },
  //swiper
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
  async created() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3${this.category}/top_rated?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&page=1`,
    );
    console.log(data);
    console.log(data);
    this.trendingTVs.push(...data.results);
  },
};
</script>

<style></style>
