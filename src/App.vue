<template>
  <div>
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer';
import './App.scss';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
