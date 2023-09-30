<template>
  <div class="flex items-center justify-between border-b py-4">
    <router-link to="/">
      <img
        :src="require('@/assets/images/bitly.png')"
        class="bg-contain h-10"
        alt=""
      />
    </router-link>

    <div class="flex items-center">
      <navButton
        to="/login"
        class=" mr-4 py-3 hover:font-bold text-slate-900  hover:text-purple-700 flex items-center bg-white/25 text-sm  ring-1 ring-inset ring-black/[0.08] hover:bg-gray-50 hover:ring-purple-700"
        ><span class="mr-3 "> Login </span>
        <SigninSvg class=""></SigninSvg>
      </navButton>

      <navButton
        to="/signup"
        class="text-white bg-purple-700 shadow-lg shadow-indigo-700/50"
        >Register Now
      </navButton>
    </div>
  </div>
</template>
<script>
import navButton from "./NavBarButton.vue";
import SigninSvg from "@/components/svg/SignInImage.vue";

export default {
  components: {
    navButton,
    SigninSvg,
  },
};
</script>
