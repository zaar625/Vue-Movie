<template>
  <div class="header" :class="scrollTop > 100 ? 'shrink' : ''">
    <div class="header__wrap container">
      <div class="logo">
        <img :src="logo" />
        <router-link to="/"> movie </router-link>
      </div>
      <ul class="header__nav">
        <li :class="{ active: this.$route.path === '/' }">
          <router-link to="/">Home</router-link>
        </li>
        <li :class="{ active: this.$route.path === '/movie' }">
          <router-link to="/movie">Movies</router-link>
        </li>
        <li :class="{ active: this.$route.path === '/tv' }">
          <router-link to="/tv">Tv Series</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import './header.scss';

export default {
  data() {
    return {
      logo: require('../../assets/vue.png'),
      headerRef: '',
      scrollTop: '',
    };
  },
  created() {
    const shrinkHeader = () => {
      const yoffset = window.pageYOffset;
      console.log(yoffset);
      // const scroll = yoffset > 100 ? 'true' : 'false';
      this.scrollTop = yoffset;
    };
    window.addEventListener('scroll', shrinkHeader);
  },
};
</script>

<style></style>
