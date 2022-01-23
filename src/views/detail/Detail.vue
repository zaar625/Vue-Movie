<template>
  <div>
    <div
      class="banner"
      :style="{ backgroundImage: `url(${image(movieDetail.backdrop_path)})` }"
    ></div>
    <div class="mb-3 movie-content container">
      <div class="movie-content__poster">
        <div
          class="movie-content__poster__img"
          :style="{ backgroundImage: `url(${image(movieDetail.poster_path)})` }"
        ></div>
      </div>
      <div class="movie-content__info">
        <h1 class="title">{{ movieDetail.title || movieDetail.name }}</h1>
        <div class="genres"></div>
        <p class="overview">{{ movieDetail.overview }}</p>
        <div class="cast">
          <div class="section__header">
            <h2>Casts</h2>
          </div>
          <CastList :id="movieDetail.id" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="section mb-3">
        <VideoList />
      </div>
      <div class="section mb-3">
        <div class="section__header mb-2">
          <h2>Similar</h2>
        </div>
        <Similar />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { getDetailMovie } from '../../api/api-function';
import { apiConfig } from '../../api/apiConfig';
import CastList from './CastList.vue';
import VideoList from './VideoList.vue';
import Similar from '../../components/movie-list/Similar.vue';
import './detail.scss';

export default {
  components: {
    CastList,
    VideoList,
    Similar,
  },
  async created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    const category = this.$route.name;
    const { data } = await getDetailMovie(id, category);
    this.movieDetail = data;
    console.log(this.movieDetail.backdrop_path);
  },
  data() {
    return {
      movieDetail: {},
    };
  },
  methods: {
    image(image) {
      return apiConfig.originalImage(image);
    },
  },
};
</script>

<style></style>
