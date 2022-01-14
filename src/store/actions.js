import { setModalActive } from '../api/api-function';

export default {
  FETCH_VIDEO(context, item) {
    setModalActive(item).then(({ data }) => {
      context.commit('SET_VIDEO', data);
      console.log(data);
    });
  },
};
