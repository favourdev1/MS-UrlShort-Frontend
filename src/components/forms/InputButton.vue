<template>
  <div class="pb-3">
    <input
      type="submit"
      class="w-full mt-2 py-3 block rounded-md  text-white ring-0 bg-purple-700 focus:ring-2 focus:ring-purple-700 outline outline-offset-2 outline-0 focus:outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      :value="text"
      id="submit"
      
      required
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      submit: "",
      text: "Create An Account",
    };
  },
};
</script>
