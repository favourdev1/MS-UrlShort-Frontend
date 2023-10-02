<template>
  <div
    class="relative z-10 mx-4 ring-1 ring-slate-900/10 sm:rounded-3xl lg:flex-1 h-max"
  >
    <div class="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
      <div class="flex items-center justify-between py-0">
        <p :class="['font-semibold', 'text-lg', planNameColor]">{{ planName }}</p>
        <div v-show="shouldShow"
          class="w-max bg-purple-100 font-semibold rounded-full px-3 py-1.5 text-purple-700"
        >
          <small class="text-xs" > Most Popular </small>
        </div>
      </div>
      <p class="mt-6 text-gray-500 text-sm leading-5">
        The essentials to provide your best work for clients.
      </p>
      <div class="mt-3 flex items-center" >
        <p :class="['text-[2.5rem]', 'leading-none', 'text-slate-900', planNameColor]">
         <PriceView duration="/month" price="200"></PriceView>
        </p>
      </div>
      <slot></slot>

      <button 
        :class="[
  
          'rounded-lg',
          'mt-4',
          'text-sm',
          'w-full',
          ,
          'px-5',
          'py-2',
          'mx-auto',
          buttonColor,
        ]"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import PriceView  from "./PriceView.vue"; 
export default {
  components: {PriceView},

  props: {
    planName: String, // Define the prop and its type
    buttonText: {
      type: String,
      default: "Get Started ",
    },

   
    buttonColor: {
      type: String,
      default: "border-blue-500 bg-white rounded-lg px-5 ",
    },

    planNameColor: {
      type: String,
      default: "text-black",
    },

    shouldShow: {
      default: true,
    },
  },
};
</script>
