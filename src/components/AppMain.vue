<script>
import ShopCard from './ShopCard.vue';
import { state } from "../assets/state.js"

export default {
    data() {
        return {
            state: state
        }
    },

    name: 'AppMain',
    components: {
        ShopCard,
    },
    
    mounted() {
        state.getProducts()
    },
}

</script>

<template>
    <main>
        <ShopCard :product="product"
        v-for="(product) in state.products" :key="product.id" />
    </main>
</template>

<style scoped>
main{
    padding: 10% 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
