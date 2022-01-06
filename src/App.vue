<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
// import Footer from './components/footer/Footer';
import './App.scss';

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
