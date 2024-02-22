<template>
    <header class="bg-slate-800 py-4 px-4 shadow-xl fixed w-full">
        <div class="flex justify-between items-center">
            <div class="flex">
                <logo></logo>
                <nav class="flex gap-4 mx-4">
                    <router-link :to="{ name: 'about' }">About</router-link>
                    <router-link :to="{ name: 'catalog' }">Catalog</router-link>
                </nav>
            </div>
            <div class="flex gap-x-4">
                <form action="" class="w-11/12">
                  <input class="border border-gray-400 bg-transparent focus:outline-none focus:border-purple-800 transition rounded-md py-1 px-2 text-white">
                </form>
                <router-link :to="{ name: 'login' }">Login</router-link>
                <router-link :to="{ name: 'register'}">Register</router-link>
            </div>
        </div>
    </header>

</template>

<script setup>
import Logo from './Logo.vue';
import FormInput from "@/components/FormInput.vue";
</script>