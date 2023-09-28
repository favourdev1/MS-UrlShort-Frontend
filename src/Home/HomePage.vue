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
        <div class="h-full w-full md:w-11/12 lg:w-3/4 mx-auto">
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
          <div class="flex items-center mx-auto">
            <div class="w-full"></div>
            <div
              class="relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none"
            >
              <div class="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
                <div class="flex items-center justify-between">
                  <p class="text-sky-700 font-bold text-medium">FREE</p>

                  <button
                    class="inline-flex justify-center rounded-lg text-sm font-medium py-2 px-3 bg-slate-900 text-white hover:bg-slate-700"
                  >
                    Get Started
                  </button>
                </div>

                <div class="mt-3 flex items-center">
                  <p class="text-[2.5rem] leading-none text-slate-900">
                    $<span class="font-bold">299</span>
                  </p>
                  <p class="ml-3 text-sm">
                    <span class="font-semibold text-slate-900"
                      >one-time payment</span
                    ><br /><span class="text-slate-500">plus local taxes</span>
                  </p>
                </div>

                <p class="mt-6 text-sm leading-6 text-slate-600">
                  Get lifetime access to every one of our website templates as
                  well as all of our component examples for a single one-time
                  purchase.
                </p>

                <ul
                  class="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700"
                >
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none"
                    >
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                      <rect
                        width="23"
                        height="22"
                        x="3"
                        y="5"
                        stroke="#0EA5E9"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        rx="2"
                      ></rect>
                      <rect
                        width="10"
                        height="18"
                        x="19"
                        y="9"
                        fill="#E0F2FE"
                        stroke="#0EA5E9"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        rx="2"
                      ></rect>
                      <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
                      <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
                      <path
                        stroke="#0EA5E9"
                        stroke-width="1.5"
                        d="M3 11h16"
                      ></path>
                    </svg>
                    <p class="ml-5">
                      <strong class="font-semibold text-slate-900"
                        >Every site template</strong
                      >
                      — beautifully designed, expertly crafted website templates
                      built with modern technologies like React and Next.js.
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none"
                    >
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                      <path
                        fill="#E0F2FE"
                        d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                      ></path>
                      <path
                        fill="#0EA5E9"
                        d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                      ></path>
                    </svg>
                    <p class="ml-5">
                      <strong class="font-semibold text-slate-900"
                        >Over 500+ components</strong
                      >
                      — everything you need to build beautiful application UIs,
                      marketing sites, ecommerce stores, and more.
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none"
                    >
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                      <path
                        fill="#E0F2FE"
                        d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                      ></path>
                      <path
                        stroke="#0EA5E9"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                      ></path>
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="#0EA5E9"
                        stroke-width="1.5"
                      ></circle>
                    </svg>
                    <p class="ml-5">
                      <strong class="font-semibold text-slate-900"
                        >Lifetime access</strong
                      >
                      — get instant access to everything we have today, plus any
                      new components and templates we add in the future.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
