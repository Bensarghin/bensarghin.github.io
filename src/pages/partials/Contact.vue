<template>
    <div class="max-w-screen-xl mx-auto my-20 text-white">
        <div class="lg:w-1/2 w-full mx-auto text-center mb-20">
            <h2 class="section-header capitalize font-semibold text-center">Collaborate & Achieve</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        
        <div class="lg:grid lg:grid-cols-2 justify-between items-center">
            <div class="bg-[#0e1118] mx-auto hidden lg:block max-w-xl border-gray-800 rounded-lg p-8">
                <JoinIcon/>
            </div>
            <div>
                <div class="bg-[#0e1118] mx-auto max-w-xl border-gray-800 rounded-lg p-8">
                    <form action="#" method="POST" class="">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-">First name</label>
                            <div class="mt-2.5">
                                <input type="text" id="disabled-input" aria-label="disabled input" class="base-input">
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" id="disabled-input" aria-label="disabled input" class="base-input">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="company" class="block text-sm font-semibold leading-6 text-">Company</label>
                            <div class="mt-2.5">
                                <input type="text" id="disabled-input" aria-label="disabled input" class="base-input">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-">Email</label>
                            <div class="mt-2.5">
                                <input type="email" id="disabled-input" aria-label="disabled input" class="base-input">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm font-semibold leading-6 text-">Phone number</label>
                            <div class="mt-2.5">
                                <input type="text" id="disabled-input" aria-label="disabled input" class="base-input" placeholder="+001 X-XXXXXXX"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-">Message</label>
                            <div class="mt-2.5">
                            <textarea name="message" id="message" rows="4" class="base-textarea" />
                            </div>
                        </div>
                        </div>
                        <div class="mt-10">
                            <a to="/" class="mx-auto text-center bg-white hover:border hover:px-[15px] hover:hover:py-[11px] hover:text-white hover:border-white rounded-3xl py-3 px-4 text-black uppercase hover:bg-transparent text-sm font-bold">
                                Let's Work Together!
                            </a>            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import JoinIcon from '../../icons/jion.vue'
  </script>