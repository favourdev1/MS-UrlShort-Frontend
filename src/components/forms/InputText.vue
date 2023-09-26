<template>
    <div class="pb-3">
    
      <input type="text"  class="w-full mt-2 py-3 block rounded-md pl-4 pr-7 text-gray-900 ring-0 focus:ring-2 focus:ring-purple-700 outline outline-offset-2 outline-1 outline-gray-200 focus:outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" :placeholder="placeholderText" id="text" v-model="text" required />
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        text: "",

        placeholderText:"Username"
      };
    },
  };
  </script>
  