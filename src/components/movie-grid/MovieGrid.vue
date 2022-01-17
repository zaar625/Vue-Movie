<template>
  <div>
    <div class="section mb-3">
      <div class="movie-search">
        <input type="text" placeholder="Enter keyword" v-model="keyword" />
        <Button
          class="small"
          @click="goToSearch"
          @:keyup.enter="goToSearch"
        ></Button>
      </div>
    </div>
    <div class="movie-grid">
      <MovieCard v-for="list in pageList" v-bind:key="list"></MovieCard>
    </div>
    <div v-if="page < totalPage" className="movie-grid__loadmore">
      <OutlineButton class="small" @click="loadMore">More</OutlineButton>
    </div>
  </div>
</template>

<script>
import { getSerchList } from '../../api/api-function';
export default {
  data() {
    return {
      keyword: '',
      totalPage: 0,
      pageList: [],
      page: 1,
    };
  },
  methods: {
    goToSearch() {
      if (this.keyword.trim().length > 0) {
        const category = this.$route.name;
        this.$router.push(`/${category}/search/${this.keyword}`);
      }
    },
    async loadMore() {
      const category = this.$route.name;
      if (this.keyword === undefined) {
        const { data } = await getSerchList(category, this.page + 1);
        this.pageList.push(...this.pageList, ...data.results);
        this.page = this.page + 1;
        this.totalPage = data.total_pages;
      }
    },
  },
  async mounted() {
    const category = this.$route.name;
    const { data } = await getSerchList(category, this.page);
    this.pageList = data;
  },
};
</script>

<style></style>
