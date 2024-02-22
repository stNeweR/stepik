<template>
  <Container>
    <Block class="w-1/2 mx-auto">
      <form action="" method="post" class="p-2 flex flex-col gap-2">
        <Input name="user_name" label="User_name:" type="text" id="user_name"/>
        <Input name="first_name" label="First_name:" type="text" id="first_name"/>
        <Input name="last_name" label="Last_name:" type="text" id="last_name"/>
        <Input name="email" label="Email:" type="email" id="email"/>
        <Input name="fuck" label="Password:" type="password" id="password"/>
        <Input name="password" label="Password_confirmation:" type="password" id="password_confirmation"/>
        <button type="submit">Register</button>
      </form>
    </Block>
  </Container>
</template>

<script setup>
import Container from "@/components/Container.vue"
import Block from "@/components/Block.vue";
import Input from "@/components/FormInput.vue"
</script>
