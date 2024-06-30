<template>
    <navbar-vue/>
    <div class="bg-primary border-gray-200">
        <slot></slot>
    </div>
    <footer-vue/>
</template>

<script setup lang="ts">
import NavbarVue from './Navbar.vue';
import FooterVue from './Footer.vue';
</script>

<style scoped>

</style>