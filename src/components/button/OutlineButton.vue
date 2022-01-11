<template>
  <button class="btn btn-outline" :class="isActive ? 'active' : ''">
    <slot name="outlineButton"></slot>
  </button>
</template>

<script>
import './button.scss';

export default {
  components: {},
};
</script>

<style></style>
