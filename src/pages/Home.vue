<template>
    <Container>
        <h1>HALO!</h1>
    </Container>
</template>

<script setup>
import axios from 'axios';
import Container from '../components/Container.vue';
import { onMounted, ref } from 'vue';

const users = ref([])

// onMounted( async () => {
//     try {
//         const responce = await axios.get("http://localhost:1234/api/users")
//         users.value = responce.data
//     } catch (error) {
//         console.error(error)
//     }
// })

</script>