import { createStore } from 'vuex';
import mutations from './mutation.js';
import actions from './actions.js';

export default createStore({
  state: {
    video: {},
    isActive: false,
  },
  mutations,
  actions,
});
