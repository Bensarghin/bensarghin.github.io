<template>
    <div class="max-w-screen-xl mx-auto px-4 lg:py-20  text-white">
        <div class="lg:grid lg:grid-cols-2 justify-between">
            <div class="mx-auto">
                <h1 class="text-4xl lg:text-6xl font-medium uppercase leading-normal">Transforming <br>Ideas into </h1>
                <h2 class="text-4xl lg:text-6xl font-medium uppercase leading-normal text-third mb-7">Digital Experiences!</h2>
                <div class="lg:flex justify-between uppercase text-sm lg:mb-0 mb-6 gap-8 border-t border-b border-gray-800 mx-auto bg-gradient-to-r from-[#2d3345] to-[#141720] py-5 px-8">
                    <div class="mb-4">
                        <p>
                            Helping Businesses Unlock Digital Potential
                        </p>
                        <p class="text-gray-400">with Tailored Solutions!</p> 
                    </div>
                    <div>
                        <p>
                            Transform Your Business Today
                        </p>
                        <p>
                            <a href="" class="text-secondary border-b border-secondary">Start</a> your First Step!
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="bg-[#0e1118] mx-auto items-center text-center hidden lg:block border-gray-800 rounded-lg px-8">
                    <WebsiteIcon class="h-96 w-96 mx-auto m-0 object-cover"/>
                </div>
            </div>
        </div>
    </div>
    <hr class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
    <div>
        <client-logos/>
    </div>
    <hr id="about" class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
    <div class="px-4 lg:px-0" >
        <about-section/>
    </div>
    <hr id="portfolio" class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
    <div class="px-4 lg:px-0" >
        <PortfolioSection/>
    </div>
    <hr id="products" class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
    <div class="px-4 lg:px-0" >
        <ProductsSection/>
    </div>
    <hr id="contact" class="h-px my-4 border-0 bg-gray-800 max-w-screen-xl mx-auto">
    <div class="px-4 lg:px-0" >
        <ContactSection/>
    </div>
    <button type="button" class="scroll-to-top hidden text-white fixed bottom-10 right-8 bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center items-center me-2">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </button>
</template>

<script setup lang="ts">
import ClientLogos from './partials/ClientLogos.vue';
import AboutSection from './partials/About.vue'
import PortfolioSection from './partials/Portfolio.vue'
import ProductsSection from './partials/Products.vue'
import ContactSection from './partials/Contact.vue';
import WebsiteIcon from '../icons/website.vue';

</script>

<style scoped>

</style>