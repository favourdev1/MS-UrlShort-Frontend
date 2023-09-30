<template>
  <li class=" flex items-center ">
    <i class='bx bx-check text-xl text-purple-500 font-bold'></i>
    <div class="ml-2">
      <slot class=" text-slate-900">{{ paymentFeaturesText }}</slot>
      
    </div>
  </li>
</template>
<script>
export default {
    props: ['paymentFeaturesText']
};
</script>
