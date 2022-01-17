<template>
  <div>
    <div v-for="videoList in videoLists" v-bind:key="videoList" class="video">
      <div class="video__title">
        <h2>{{ videoList.name }}</h2>
      </div>
      <iframe
        width="100%"
        height="800px"
        title="video"
        :src="`https://www.youtube.com/embed/${videoList.key}`"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { getVideos } from '../../api/api-function';
export default {
  data() {
    return {
      videoLists: [],
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const category = this.$route.name;
    const { data } = await getVideos(id, category);
    console.log(data);
    this.videoLists = data.results.slice(0, 3);
  },
};
</script>

<style></style>
