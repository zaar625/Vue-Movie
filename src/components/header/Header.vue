<template>
  <div :scroll="shrinkHeader" ref="headerRef" class="header">
    <div class="header__wrap container">
      <div class="logo">
        <img :src="logo" />
        <router-link to="/"> tmovie </router-link>
      </div>
      <ul class="header__nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/movie">Movies</router-link></li>
        <li><router-link to="/tv">Tv Series</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import './header.scss';

export default {
  data() {
    return {
      logo: require('../../assets/tmovie.png'),
      headerRef: '',
    };
  },
  methods: {
    shrinkHeader() {
      const headerRef = null;
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    },
  },
};
</script>

<style></style>
