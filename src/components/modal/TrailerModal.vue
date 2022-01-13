<template>
  <div :id="`modal_${item.id}`" :class="`modal ${isActive ? 'active' : ''}`">
    <div class="modal__content">
      <iframe width="100%" height="500px" title="trailer"></iframe>
      <div class="modal__content__close" @Click="closeModal()">
        <i className="bx bx-x"></i>
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
      isActive: false,
    };
  },
  methods: {
    closeModal() {
      this.isActive = false;
      //   onClose();
    },
  },
};
</script>

<style></style>
