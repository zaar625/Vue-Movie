<template>
  <div class="hero-slide">
    <Swiper
      class="a"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="item in movieItems"
        :key="item"
        v-slot="{ isActive }"
      >
        <div
          class="hero-slide__item"
          :class="isActive ? 'active' : ''"
          :style="{ backgroundImage: `url(${image(item.backdrop_path)})` }"
        >
          <div class="hero-slide__item__content container">
            <div class="hero-slide__item__content__info">
              <h2 class="title">{{ item.title }}</h2>
              <div class="overview">{{ item.overview }}</div>
              <div className="btns">
                <router-link :to="`/movie/${item.id}`">
                  <Button>
                    <template v-slot:redButton> Watch now </template>
                  </Button>
                </router-link>
                <OutlineButton v-on:click="setModalActive(item.id)">
                  <template v-slot:outlineButton>Watch trailer</template>
                </OutlineButton>
              </div>
            </div>
            <div className="hero-slide__item__content__poster">
              <img :src="w500Image(item.poster_path)" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
    <TrailerModal
      v-for="item in movieItems"
      :key="item"
      v-bind:item="item"
    ></TrailerModal>
  </div>
</template>

<script>
import './hero-slide.scss';
import Button from '../button/Button.vue';
import OutlineButton from '../button/OutlineButton.vue';
import TrailerModal from '../modal/TrailerModal.vue';
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
    Button,
    OutlineButton,
    TrailerModal,
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
  //movie data
  created: function () {
    const getMovie = async () => {
      const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=af43ac72d70dd07b3747f0dc7b4a2680&language=ko&sort_by=popularity.desc&include_adult=false&page=1`);
      console.log(data);
      this.movieItems.push(...data.results.slice(1, 4));
      console.log(this.movieItems);
      //
    };
    getMovie();
  },
  methods: {
    image(image) {
      return apiConfig.originalImage(image);
    },
    w500Image(image) {
      return apiConfig.w500Image(image);
    },
    setModalActive(item) {
      this.$store.dispatch('FETCH_VIDEO', item);
      this.$store.state.isActive = true;
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
