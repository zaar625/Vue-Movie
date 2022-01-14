<template>
  <div
    :id="`modal_${item.id}`"
    :class="`modal ${this.$store.state.isActive ? 'active' : ''}`"
  >
    <div class="modal__content">
      <iframe
        width="100%"
        height="500px"
        title="trailer"
        :src="videoSrc"
      ></iframe>
      <div class="modal__content__close" @Click="closeModal()">
        <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import './modal.scss';

export default {
  props: ['item'],
  data() {
    return {
      videoSrc: '',
    };
  },
  methods: {
    closeModal() {
      this.$store.state.isActive = false;
      this.videoSrc = '';
      // onClose();
    },
  },
  created() {
    console.log(this.$store.state.video.results[0].key);
    const videSrc = `https://www.youtube.com/embed/${this.$store.state.video.results[0].key}`;
    this.videoSrc = videSrc;
    console.log(videSrc);
  },
};
</script>

<style></style>
