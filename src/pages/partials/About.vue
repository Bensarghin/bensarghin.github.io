<template>
    <div class="max-w-screen-xl mx-auto my-20 text-white">
        <div class="lg:w-1/2 w-full mx-auto text-center mb-20">
            <h2 class="section-header capitalize font-semibold text-center">About Your Developer</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        <div class="lg:grid lg:grid-cols-2 justify-between gap-10">
            <div class="mb-4 lg:mb-0">
                <div class="mb-10">
                    <h2 class="text-gray-500 my-0 flex items-center uppercase text-xl font-medium"> 
                        <span class="inline-block me-2 text-black bg-third w-10 h-10 rounded-full text-center leading-[35px]">
                            <PalletteIcon class="w-5 inline"/>
                        </span>
                        <span class="max-w-60 inline-block text-white">
                            Primary Skills
                        </span>
                    </h2>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-3 justify-between gap-2 lg:gap-y-3">
                    <div class="w-full mx-auto border border-gray-800 p-8">
                        <h4 class="text-gray-50 text-center uppercase mb-6">Laravel</h4>
                        <LaravelIcon class="h-20 text-[#f6362d] w-20 mx-auto border-b border-gray-800"/>
                    </div>
                    <div class="w-full mx-auto border border-gray-800 p-8">
                        <h4 class="text-gray-50 text-center uppercase mb-6">Vuejs</h4>
                        <VuejsIcon class="h-20 text-[#327959] w-20 mx-auto border-b border-gray-800"/>
                    </div>
                    <div class="w-full mx-auto border border-gray-800 p-8">
                        <h4 class="text-gray-50 text-center uppercase mb-6">TailwindCss</h4>
                        <TailwindIcon class="text-[#38bdf8] h-20 w-20 mx-auto border-b border-gray-800"/>
                    </div>
                    <div class="w-full mx-auto border border-gray-800 p-8">
                        <h4 class="text-gray-50 text-center uppercase mb-6">Git</h4>
                        <GitIcon class="text-[#f44d27] h-20 w-20 mx-auto border-b border-gray-800"/>
                    </div>
                    <div class="w-full mx-auto border border-gray-800 p-8">
                        <h4 class="text-gray-50 text-center uppercase mb-6">Github</h4>
                        <GithubIcon class="text-[#193989] h-20 w-20 mx-auto border-b border-gray-800"/>
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-10 mt-10 lg:mt-0">
                    <h2 class="text-gray-500 my-0 flex items-center uppercase text-xl font-medium"> 
                        <span class="inline-block me-2 text-black bg-third w-10 h-10 rounded-full text-center leading-[35px]">
                            <CodeIcon class="w-5 inline"/>
                        </span>
                        <span class="max-w-60 inline-block text-white">
                            Summary
                        </span>
                    </h2>
                </div>
                <p>
                    Hi, I'm Hamid, a passionate and dedicated full-stack web developer from Morocco. With a strong background in both front-end and back-end development, I specialize in creating seamless and dynamic web applications using Laravel and Vue.js.
                </p>
                <h3 class="text-xl font-medium text-white uppercase leading-normal mb-4 mt-10">Professional Background</h3>
                <p>
                    With 5 years of experience in the industry, I have honed my skills in various technologies and frameworks. My journey began with a fascination for how the web works, leading me to master the art of coding and development. Over the years, I've worked on diverse projects, from small business websites to complex web applications.
                </p>
                
                <div class="mt-20">
                    <div class="mx-auto max-w-7xl lg:px-8">
                    <div class="flex justify-around text-center">
                        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <p class="text-base leading-7">{{ stat.name }}</p>
                            <dd class="order-first text-2xl font-semibold tracking-tight">{{ stat.value }}</dd>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LaravelIcon from '../../icons/laravel.vue';
import VuejsIcon from '../../icons/vuejs.vue';
import TailwindIcon from '../../icons/tailwind.vue';
import CodeIcon from '../../icons/code.vue';
import GitIcon from '../../icons/git.vue';
import GithubIcon from '../../icons/github.vue';
import PalletteIcon from '../../icons/pallette.vue';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]
</script>

<style scoped>

</style>