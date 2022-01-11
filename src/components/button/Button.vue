<template>
  <button class="btn" :class="isActive ? 'active' : ''">
    <slot name="redButton"></slot>
  </button>
</template>

<script>
import './button.scss';
export default {};
</script>

<style></style>
