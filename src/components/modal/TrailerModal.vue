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
        :src="this.$store.state.Msrc"
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
  //item = 오브젝트
  props: ['item'],

  methods: {
    closeModal() {
      this.$store.state.isActive = false;
      this.$store.state.Msrc = '';
      // onClose();
    },
  },
};
</script>

<style></style>
