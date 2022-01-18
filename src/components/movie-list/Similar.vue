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
        v-for="similarItem in similarItems"
        v-bind:key="similarItem"
      >
        <MovieCard :item="similarItem" :category="this.$route.name" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import MovieCard from '../movie-card/MovieCard.vue';
import 'swiper/swiper.min.css';
import { getSimilar } from '../../api/api-function';
export default {
  data() {
    return {
      similarItems: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    MovieCard,
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
  methods: {},
  async created() {
    const id = this.$route.params.id;
    const category = this.$route.name;
    const { data } = await getSimilar(id, category);
    this.similarItems = data.results;
  },
};
</script>

<style></style>
