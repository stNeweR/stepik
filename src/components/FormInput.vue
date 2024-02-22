<template>
  <label :for=props.id>{{props.label}}</label>
  <input class="border border-gray-400 bg-transparent focus:outline-none focus:border-purple-800 focus:border-2  rounded-md py-1 px-2 text-white" :name=props.name :type=props.type :id=props.id v-model=props.model>
</template>


<script setup>


const props = defineProps(["name", "type", "id", "label", "model"])

console.log(props.model)
</script>