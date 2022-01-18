<template>
  <div>
    <PageHeader></PageHeader>
    <div class="container">
      <div class="section mb-3">
        <MovieGrid :category="this.$router.name" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/page-header/PageHeader.vue';
import MovieGrid from '../components/movie-grid/MovieGrid.vue';
export default {
  components: {
    PageHeader,
    MovieGrid,
  },
};
</script>

<style></style>
