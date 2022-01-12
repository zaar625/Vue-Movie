<template>
  <div class="footer" :style="{ backgroundImage: `url(${footerBg})` }">
    <div class="footer__content container">
      <div class="footer__content__logo">
        <div class="logo">
          <img :src="tmovie" alt="" />
          <router-link to="/">tMovies</router-link>
        </div>
      </div>
      <div class="footer__content__menus">
        <div class="footer__content__menu">
          <router-link to="/">Home</router-link>
          <router-link to="/">Contact us</router-link>
          <router-link to="/">Term of services</router-link>
          <router-link to="/">About us</router-link>
        </div>
        <div class="footer__content__menu">
          <router-link to="/">Live</router-link>
          <router-link to="/">FAQ</router-link>
          <router-link to="/">Premium</router-link>
          <router-link to="/">Pravacy policy</router-link>
        </div>
        <div class="footer__content__menu">
          <router-link to="/">You must watch</router-link>
          <router-link to="/">Recent release</router-link>
          <router-link to="/">Top IMDB</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './footer.scss';
import footerBg from '../../assets/footer-bg.jpg';
import tmovie from '../../assets/tmovie.png';
export default {
  data() {
    return {
      footerBg,
      tmovie,
    };
  },
};
</script>

<style></style>
