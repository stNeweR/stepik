<template>
    <Container>
        <h1>HALO!</h1>
    </Container>
</template>


<script>
import axios from 'axios';
import Container from '@/components/Container.vue';

export default {
    components: {Container},
    mounted(){
        this.getData()
    },
    methods: {
        getData() {
            axios.get("http://localhost:1234/api/user/")
            .then(res => {
                console.log(res)
            })
        }
    }
}
</script>