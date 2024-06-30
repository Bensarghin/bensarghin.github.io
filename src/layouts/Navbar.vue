<template>
    <nav class="relative bg-primary border-gray-200">
        <svg viewBox="0 0 1024 1024"
            class="absolute hidden lg:block -left-1/4 opacity-35 z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center text-white font-semibold text-xl">
            <circle-icon class="h-5 text-secondary me-2"/>
            <span class="uppercase">bensarghin</span>
          </a>
          <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div class="hidden w-full lg:block lg:w-auto">
            <menu-vue/>
          </div>
          <div class="w-full lg:w-auto">
            <mobile-menu class="block lg:hidden"/>
          </div>
        </div>
    </nav>
    <hr class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
</template>
<script setup lang="ts">
import MenuVue from './Menu.vue'
// import WebsiteIcon from '../icons/website.vue'
import CircleIcon from '../icons/circle.vue'
import MobileMenu from './MobileMenu.vue'
</script>