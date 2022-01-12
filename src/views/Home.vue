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
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated Movies</h2>

          <OutlineButton class="small"
            ><template v-slot:outlineButton>Veiw more</template>
          </OutlineButton>
        </div>
        <TopmovieList />
      </div>
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending TV</h2>
          <Link to="/tv">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
        <TvList />
      </div>
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Rated TV</h2>
          <Link to="/tv">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
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
