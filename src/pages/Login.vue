<template>
  <Container>
    <Block class="w-1/2 mx-auto">
      <form @submit.prevent="login" method="post" class="flex flex-col p-4 gap-2">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" class="bg-transparent  border-slate-900 outline-none py-1 px-2 focus:-translate-y-1 border-b-2">
          <p>{{ email }}</p>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" class="bg-transparent border-b-2 border-slate-900 outline-none py-1 px-2 focus:-translate-y-1">
          <p>{{ password}}</p>
          <button type="submit">Login!</button>
      </form>
    </Block>
  </Container>
</template>

<script setup>
import axios from 'axios';
import Container from "@/components/Container.vue";
import Block from "@/components/Block.vue";
import {ref} from "vue";

let email = ref("")
let password = ref("")

const login = async () => {
  try {
    await axios.post("http://localhost:1234/api/login", {email: email.value, password: password.value})
      .then(response => {
        let token = Object.values(response.data)["0"]["token"]
        console.log(token)
        document.cookie = `token=${token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/; SameSite=None; Secure`;
      })
  } catch (error) {
    console.error(error)
  }
}

</script>