<template>
  <div class="movie-list">
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="trendingItem in topRatedMovies"
        v-bind:key="trendingItem"
      >
        <MovieCard :item="trendingItem" :category="category" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import axios from 'axios';
import './movie-list.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MovieCard from '../movie-card/MovieCard.vue';

export default {
  data() {
    return {
      topRatedMovies: [],
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
    const category = 'movie';
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${category}/top_rated?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&page=1`,
    );
    console.log(data);
    this.topRatedMovies.push(...data.results);
  },
};
</script>

<style></style>
