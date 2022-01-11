<template>
  <router-link :to="Link">
    <div class="movie-card">
      <Button>
        <i class="far fa-play-circle"></i>
      </Button>
    </div>
    <h3>{{ item.title || item.name }}</h3>
  </router-link>
</template>

<script>
import './movie-card.scss';
import Button from '../button/Button.vue';
import apiConfig from '../../api/apiConfig';

export default {
  props: ['item', 'category'],
  components: {
    Button,
  },
  computed: {
    Link: function () {
      return '/' + this.category + '/' + this.item.id;
    },
  },
  methods: {
    w500Image(image) {
      return apiConfig.w500Image(image);
    },
  },
};
</script>
