<template>
  <div
    class="relative z-10 mx-4 shadow-lg ring-1 ring-slate-900/10 sm:rounded-3xl lg:flex-1"
  >
    <div class="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
      <div class="flex items-center justify-between">
        <p :class="[, 'font-bold', 'text-medium', planNameColor]">
          {{ planName }}
        </p>

        <button
          :class="[
            'inline-flex',
            'justify-center',
            'rounded-lg',
            'text-sm',
            'font-medium',
            'py-2',
            'px-3',
            buttonColor,
          ]"
        >
          {{ buttonText }}
        </button>
      </div>

      <div class="mt-3 flex items-center">
        <p class="text-[2.5rem] leading-none text-slate-900">
          $<span class="font-bold">299</span>
        </p>
        <p class="ml-3 text-sm">
          <span class="font-semibold text-slate-900">one-time payment</span
          ><br /><span class="text-slate-500">plus local taxes</span>
        </p>
      </div>

      <p class="mt-6 text-sm leading-6 text-slate-600">
        Get lifetime access to every one of our website templates as well as all
        of our component examples for a single one-time purchase.
      </p>

     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planName: String, // Define the prop and its type
    buttonText: {
      type: String,
      default: "Get Started ",
    },
    buttonColor: {
      type: String,
      default: "bg-slate-900 text-white hover:bg-slate-700 ",
    },

    planNameColor: {
      type: String,
      default: "text-black",
    },
  },
};
</script>
