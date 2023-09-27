<template>
  <div class="text-center pt-20 mx-auto">
    <h1
      class="font-bold py-10 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-pink-700 to-blue-700"
    >
      Shorten Your Loooong Links :)
    </h1>

    <p class="text-gray-500 text-xl lg:px-48">
      Linkly is an efficient and easy-to-use URL shortening service that
      streamlines your online experience.
    </p>
    <div class="w-3/6 mx-auto mt-8">
      <div
        class="w-full flex mt-2 block rounded-lg pl-4 text-slate-900 bg-white placeholder:text-gray-600 sm:text-sm sm:leading-6 text-start border-2 border-purple-700 shadow-sm shadow-slate-200 overflow-hidden py-2 divide-x-2 divide-purple-700"
      >
        <input
          v-on:focus="isFocused = true"
          v-on:blur="isFocused = false"
          type="text"
          name="link"
          placeholder="Enter the link here..."
          id="link"
          class="outline-0 focus:outline-0 flex-auto bg-transparent"
        />

        <div class="">
          <p
            v-bind:class="{ 'text-purple-700 font-bold': isFocused }"
            class="cursor-pointer rounded-full font-bold px-4 py-2 text-base text-purple-700"
          >
            Shorten Now!
          </p>
        </div>
      </div>

      <div class="text-purple-600 py-3 rounded-lg">
        <p>End your links with that word that makes it unique</p>
      </div>
    </div>

    <div class="border-t mt-5 flex items-center text-start">
      <div class="py-10 w-1/2">
        <div
          class="w-16 h-16 p-1 my-7 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden"
        >
          <img
            :src="require('@/assets/images/build-anything.png')"
            class="bg-contain w-18 rounded-full"
            alt=""
          />
        </div>

        <h5 class="text-pink-600">Brand Anything</h5>
        <p class="text-2xl font-bold">Turn your Links into brand assets</p>
        <p class="text-slate-600">
          Whether you’re sharing one link or millions, UrlShort lets you
          personalize, share, and track your content links, while capturing data
          with every click.
        </p>

        <div class="rounded-full bg-pink-100 text-pink-600 w-max px-6 text-sm py-2">
          <p>Get Started</p>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocused: false,
    };
  },
};
</script>
