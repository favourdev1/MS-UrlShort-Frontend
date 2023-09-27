<template>
  <div class="md:w-6/12 lg:w-3/12 mx-auto text-center">
    <Bigtext
      text="Create your account"
      class="font-semibold text-4xl text-gray-700 text-center mt-8 py-6"
    >
    </Bigtext>
    <p class="text-gray-700 text-center">
      Already have an account ?
      <router-link to="/Login" class="text-purple-800 underline">Login</router-link>
    </p>
    <GoogleButton>Sign in with google</GoogleButton>

    <div class="relative h-max pt-5 text-center py-4">
      <p class="mx-auto bg-white w-max px-5 translate-y-3 my-0">OR</p>

      <hr class="border w-full" />
    </div>
    <div class="text-left">
      <form action="#" class="block" method="post">
        <label for="Username">Username</label>
        <InputText></InputText>
        <label for="email">Email</label>
        <InputEmail></InputEmail>
        <label for="password">Password</label>
        <InputPassword></InputPassword>

        <Submit>Create an Account</Submit>

        <p class="pt-4 text-sm text-center text-gray-600">
          By creating an account, you agree to our
          <a href="#" class="text-purple-800 underline"> Terms of Service </a
          >and <a href="#" class="text-purple-800 underline">Privacy Policy</a>
        </p>
      </form>
    </div>
  </div>
</template>

<!-- script -->
<script>
import Bigtext from "./components/BigText.vue";
import InputText from "./components/forms/InputText.vue";
import InputEmail from "./components/forms/InputEmail.vue";
import InputPassword from "./components/forms/InputPassword.vue";
import Submit from "./components/forms/InputButton.vue";
import GoogleButton from "./components/props/GoogleButton.vue";
export default {
  name: "App",
  components: {
    Bigtext,
    InputText,
    InputEmail,
    InputPassword,
    Submit,
    GoogleButton,
  },
};
</script>
