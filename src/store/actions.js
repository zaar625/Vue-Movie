import { setModalActive, getDetailMovie } from '../api/api-function';

export default {
  FETCH_VIDEO(context, item) {
    setModalActive(item).then(({ data }) => {
      context.commit('SET_VIDEO', data);
      console.log(data);
    });
  },
  FETCH_MOVIE_DETAIL(context, item) {
    getDetailMovie(item).then(({ data }) => {
      context.commit('GET_MOVIE_DETAIL', data);
      console.log(data);
    });
  },
};
