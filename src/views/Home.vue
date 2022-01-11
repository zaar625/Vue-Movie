<template>
  <div>
    <HeroSlide></HeroSlide>
    <div className="container">
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending Movies</h2>

          <OutlineButton class="small"
            ><template v-slot:outlineButton>Veiw more</template>
          </OutlineButton>
        </div>
        <MovieList />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSlide from '../components/heroslide/HeroSlide';
import OutlineButton from '../components/button/OutlineButton.vue';
import MovieList from '../components/movie-list/MovieList.vue';
export default {
  components: {
    HeroSlide,
    OutlineButton,
    MovieList,
  },
};
</script>

<style></style>
