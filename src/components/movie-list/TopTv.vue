<template>
  <div class="movie-list">
    <Swiper
      :slides-per-view="'auto'"
      :space-between="10"
      :grab-cursor="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="trendingItem in trendingMovie"
        v-bind:key="trendingItem"
      >
        <MovieCard :item="trendingItem" :category="category" />
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
      trendingMovie: [],
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
    const category = 'tv';
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${category}/top_rated?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&page=1`,
    );
    console.log(data);
    console.log(data);
    this.trendingMovie.push(...data.results);
  },
};
</script>

<style></style>
