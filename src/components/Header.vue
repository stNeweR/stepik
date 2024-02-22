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
                    <input type="text" class="w-full bg-transparent border-b-2 border-b-slate-900 outline-none focus:translate-y-1 transition">
                </form>
                <router-link :to="{ name: 'login' }">Login</router-link>
                <a href="">Register</a>
            </div>
        </div>
    </header>

</template>

<script setup>
import Logo from './Logo.vue';
</script>