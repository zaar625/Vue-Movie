<template>
  <router-link :to="`${this.category}/${this.item.id}`">
    <div
      class="movie-card"
      :style="{ backgroundImage: `url(${w500Image(item.poster_path)})` }"
    >
      <Button>
        <template v-slot:redButton>
          <i class="fas fa-play"></i>
        </template>
      </Button>
    </div>
    <h3>{{ item.title || item.name }}</h3>
  </router-link>
</template>

<script>
import './movie-card.scss';
import Button from '../button/Button.vue';
import { apiConfig } from '../../api/apiConfig';

export default {
  props: ['item', 'category'],
  components: {
    Button,
  },

  methods: {
    w500Image(image) {
      return apiConfig.w500Image(image);
    },
  },
  // created() {
  //   this.$router.go(this.$router.currentRoute);
  // },
};
</script>
