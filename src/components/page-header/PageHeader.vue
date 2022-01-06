<template>
  <div class="page-header" :style="pageheaderbg">
    <h2>백그라운드</h2>
  </div>
</template>

<script>
import bg from '../../assets/footer-bg.jpg';
import './page-header.scss';
export default {
  data: function () {
    return {
      pageheaderbg: bg,
    };
  },
};
</script>

<style></style>
