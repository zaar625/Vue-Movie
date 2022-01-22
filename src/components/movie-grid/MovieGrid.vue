<template>
  <div>
    <div class="section mb-3">
      <div class="movie-search">
        <form @submit.prevent="goToSearch">
          <input type="text" placeholder="Enter keyword" v-model="keyword" />
          <Button class="small" @click="goToSearch"
            ><template v-slot:redButton>Search</template></Button
          >
        </form>
      </div>
    </div>
    <div class="movie-grid">
      <MovieCard
        v-for="list in pageList"
        v-bind:key="list"
        :item="list"
      ></MovieCard>
    </div>
    <div v-if="page < totalPage" class="movie-grid__loadmore">
      <OutlineButton class="small" @click="loadMore"
        ><template v-slot:outlineButton>More</template></OutlineButton
      >
    </div>
  </div>
</template>

<script>
import { getCategoryPageList, getSearchist } from '../../api/api-function';
import Button from '../button/Button.vue';
import OutlineButton from '../button/OutlineButton.vue';
import MovieCard from '../movie-card/MovieCard.vue';
import './movie-grid.scss';
export default {
  props: ['category'],
  components: {
    Button,
    OutlineButton,
    MovieCard,
  },
  data() {
    return {
      keyword: '',
      totalPage: 0,
      pageList: [],
      page: 1,
    };
  },
  methods: {
    async goToSearch() {
      const { data } = await getSearchist(this.$route.path, this.keyword);
      console.log(data);
      // console.log(this.$route.name);
      // {page: 1, results: Array(11), total_pages: 1, total_results: 11}
      this.pageList = data.results;
      this.keyword = '';
      // this.$route.push(`/search/${this.keyword}`);
    },
    async loadMore() {
      const category = this.$route.path;
      if (this.keyword === '') {
        const { data } = await getCategoryPageList(category, this.page + 1);
        this.pageList.push(...data.results);
        this.page = this.page + 1;
      }
    },
  },
  async mounted() {
    const category = this.$route.path;
    console.log(category);
    const { data } = await getCategoryPageList(category, this.page);
    this.pageList = data.results;
    this.totalPage = data.total_pages;
  },
};
</script>

<style></style>
