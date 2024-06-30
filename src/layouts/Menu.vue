<template>
    <ul class="font-medium flex items-center p-4 border-gray-100 rounded-lg bg-primary flex-row space-x-8 rtl:space-x-reverse mt-0 border-0">
        <li>
            <RouterLink to="/home" class="nav-item block uppercase  my-2 mx-3 text-secondary border-b border-secondary md:bg-transparent" 
            aria-current="page">
                Home
            </RouterLink>
        </li>
        <li>
            <a href="#about" class="nav-item block uppercase py-1 px-1.5 text-gray-500 hover:text-gray-300 md:hover:bg-transparent transition-colors ease-in-out delay-150 text-md font-medium">
                About me
            </a>
        </li>
        <li>
        <a href="#portfolio" class="nav-item block uppercase py-1 px-1.5 text-gray-500 hover:text-gray-300 md:hover:bg-transparent transition-colors ease-in-out delay-150 text-md font-medium">
            Portfolio
        </a>
        </li>
        <li>
            <a href="#products" class="nav-item block uppercase py-1 px-1.5 text-gray-500 hover:text-gray-300 md:hover:bg-transparent transition-colors ease-in-out delay-150 text-md font-medium">
                Explore Products
            </a>
        </li>
        <li>
            <a href="#contact" class="nav-item block uppercase py-1 px-1.5 text-gray-500 hover:text-gray-300 md:hover:bg-transparent transition-colors ease-in-out delay-150 text-md font-medium">
            get in touch
        </a>
        </li>
    </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>