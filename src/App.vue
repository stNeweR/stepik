<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
    <Header></Header>

    <main class="flex-1">
        <router-view></router-view>
    </main>

    <Footer></Footer>
</template>