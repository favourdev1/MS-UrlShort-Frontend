<template>
  {{ priceUnit }}<span class="font-bold">{{ price }}</span>
  <span class="text-sm">{{ duration }}</span>
</template>
<script>
export default {
  props: {
    priceUnit: {
      default: "$",
    },
    price: {
      default: "Free",
    },
    duration: {
      default: "/month",
    },
  },
};
</script>
