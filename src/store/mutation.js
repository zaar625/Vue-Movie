export default {
  SET_VIDEO(state, video) {
    state.video = video;
    state.Msrc = `https://www.youtube.com/embed/${video.results[0].key}`;
  },
  GET_MOVIE_DETAIL(state, movie) {
    state.movieDetail = movie;
  },
};
