<template>
  <div>
    <HeroSlide></HeroSlide>
    <div class="container">
      <div class="section mb-3">
        <div class="section__header mb-2">
          <h2>Trending Movies</h2>
          <router-link :to="`/movie`">
            <OutlineButton class="small"
              ><template v-slot:outlineButton>Veiw more</template>
            </OutlineButton>
          </router-link>
        </div>
        <MovieList />
      </div>
      <div class="section mb-3">
        <div class="section__header mb-2">
          <h2>Top Rated Movies</h2>
          <router-link :to="`/movie`">
            <OutlineButton class="small"
              ><template v-slot:outlineButton>Veiw more</template>
            </OutlineButton>
          </router-link>
        </div>
        <TopmovieList />
      </div>
      <div class="section mb-3">
        <div class="section__header mb-2">
          <h2>Trending TV</h2>
          <router-link :to="`/tv`">
            <OutlineButton class="small"
              ><template v-slot:outlineButton>Veiw more</template>
            </OutlineButton>
          </router-link>
        </div>
        <TvList />
      </div>
      <div class="section mb-3">
        <div class="section__header mb-2">
          <h2>Rated TV</h2>
          <router-link :to="`/tv`">
            <OutlineButton class="small"
              ><template v-slot:outlineButton>Veiw more</template>
            </OutlineButton>
          </router-link>
        </div>
        <TopTv />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSlide from '../components/heroslide/HeroSlide';
import OutlineButton from '../components/button/OutlineButton.vue';
import MovieList from '../components/movie-list/MovieList.vue';
import TopmovieList from '../components/movie-list/TopmovieList.vue';
import TvList from '../components/movie-list/TvList.vue';
import TopTv from '../components/movie-list/TopTv.vue';
export default {
  components: {
    HeroSlide,
    OutlineButton,
    MovieList,
    TopmovieList,
    TvList,
    TopTv,
  },
};
</script>

<style></style>
