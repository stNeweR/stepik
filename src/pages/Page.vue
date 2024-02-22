<script setup>
import Container from "@/components/Container.vue";
import {onMounted} from "vue";
import Cookie from "js-cookie"
import axios from "axios";
onMounted(async () => {

  const token = Cookie.get("token")
  console.log(token)
  await axios.get("http://localhost:1234/api/users", {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  }).then((response) => {
    console.log(response)
  })

})



</script>

<template>
  <Container>
    <h1>Error!</h1>
  </Container>
</template>

