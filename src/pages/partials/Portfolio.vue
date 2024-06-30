<template>
    <div class="max-w-screen-xl mx-auto my-20 text-white">
        <div class="lg:w-1/2 w-full mx-auto text-center  mb-20">
            <h2 class="section-header capitalize font-semibold text-center">Projects & Achievements</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        <div>
            <div class="lg:grid lg:grid-cols-2 justify-center gap-4">
                <div v-for="item in works" class="shadow mb-4 shadow-gray-800 border-gray-800 rounded-lg overflow-hidden bg-[#0e1118] p-4">
                    <a href="#" class="p-8 h-full cursor-pointer w-full">
                            <div class="p-8 rounded-3xl flex justify-between items-center">
                                <div>
                                    <h3 class="text-3xl font-medium lowercase">{{ item.title }}</h3>
                                    <p class="text-gray-200">{{ item.description }}</p>
                                </div>
                                <div>
                                    <ArrowRight class="h-8 -rotate-45 text-third w-8"/>
                                </div>
                            </div>
                        </a>
                    <div class="">
                        <img class="object-cover h-full w-full" :src="item.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArrowRight from '../../icons/ArrowRight.vue'
const works = ref([
    {
        image: '/images/portfolio/rentcar.png',
        title: 'RentCar App',
        description: 'Open site',
        action: false,
    },
    {
        image: '/images/portfolio/courses.png',
        title: 'mousstaidsvt.com',
        description: 'Open site',
        action: ''
    },
    {
        image:'/images/portfolio/armagic.png',
        title: 'armagic.app',
        description: 'Open site',
        action: ''
    },
])
</script>

<style scoped>

</style>