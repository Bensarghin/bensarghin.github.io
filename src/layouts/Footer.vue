<template>
    <footer class="p-4 md:p-8 lg:p-10">
        <div class="mx-auto max-w-screen-xl text-center">
            <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
                <a href="/" class="flex items-center text-white font-semibold text-xl">
                    <circle-icon class="h-5 text-[#939cfe] me-2"/>
                    <span class="uppercase">bensarghin</span>
                </a>
            </a>
            <ul class="flex flex-wrap justify-center items-center my-6 text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About me</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Portfolio</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Products</a>
                </li>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" class="hover:underline">bensarghin</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>
<script setup lang="ts">
import CircleIcon from '../icons/circle.vue'
</script>