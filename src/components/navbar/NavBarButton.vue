<template>
  <router-link :to="link" class=" px-5 py-2 rounded-full">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ["link"],
};
</script>

