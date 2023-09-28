<template>
  <div class="text-center pt-20 mx-auto w-full md:w-11/12 lg:w-3/4">
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

    <div class="border-t mt-10 py-20 flex items-center text-start">
      <div class="">
        <div
          class="w-16 h-16 p-1 my-7 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden"
        >
          <img
            :src="require('@/assets/images/build-anything.png')"
            class="bg-contain w-18 rounded-full"
            alt=""
          />
        </div>

        <h5 class="text-pink-600 font-bold">Brand Anything</h5>
        <p class="text-3xl font-bold my-2">Turn your Links into brand assets</p>
        <p class="text-slate-600 text-lg w-1/2-32">
          Whether you’re sharing one link or millions, UrlShort lets you
          personalize, share, and track your content links, while capturing data
          with every click.
        </p>

        <div
          class="rounded-full bg-pink-50 hover:bg-pink-100 hover:text-pink-700 text-pink-600 w-max px-6 my-3 text-sm font-bold py-3 flex items-center cursor-pointer"
        >
          <p>Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div>
        <img :src="require('@/assets/images/linkIllustation.svg')" alt="" />
      </div>
    </div>
    <div class="mt-10 py-20 text-start">
      <div class="w-1/2">
        <div
          class="w-16 h-16 p-1 my-7 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden"
        >
          <img
            :src="require('@/assets/images/modern-features.0c791977.png')"
            class="bg-contain w-18 rounded-full"
            alt=""
          />
        </div>

        <h5 class="text-blue-600 font-bold">Analytics & Marketing Reporting</h5>
        <p class="text-3xl font-bold my-2">
          Understand what’s resonating with your audience
        </p>
        <p class="text-slate-600 text-lg lg:pr">
          Whether you’re sharing one link or millions, UrlShort lets you
          personalize, share, and track your content links, while capturing data
          with every click.
        </p>

        <div
          class="rounded-full bg-blue-50 hover:bg-blue-100 hover:text-blue-700 text-blue-600 w-max px-6 my-3 text-sm font-bold py-3 flex items-center cursor-pointer"
        >
          <p>Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div>
        <img :src="require('@/assets/images/urlshort.png')" alt="" />
      </div>
    </div>
  </div>
  <div>
    <div class="relative mt-10 py-20">
      <div class="z-1 absolute w-full h-full">
        <img :src="require('@/assets/images/beams.png')" alt="" />
      </div>

      <div class="z-10 absolute w-full py-10">
        <div class="h-full w-full md:w-11/12 xl:w-4/5 mx-auto">
          <div>
            <h5 class="text-blue-600 font-bold">Pricing</h5>
            <p class="text-5xl font-bold my-2">Get just one or get ’em all.</p>
            <p class="text-slate-600 text-lg w-1/2">
              Whether you’re sharing one link or millions, UrlShort lets you
              personalize, share, and track your content links, while capturing
              data with every click.
            </p>
          </div>
          <!-- payment card starts here -->
          <div class="flex items-center mx-auto py-10">
            <!-- <div class="w-full "></div> -->

            <PaymentContainer></PaymentContainer>
            <PaymentContainer></PaymentContainer>
            <PaymentContainer></PaymentContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentContainer from ".././components/Payment/PaymentComponent.vue";
export default {
  components: {
    PaymentContainer,
  },
  data() {
    return {
      isFocused: false,
    };
  },
};
</script>
