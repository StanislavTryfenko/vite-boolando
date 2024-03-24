<script>
export default {
    name: 'AppMain',
    components: {
        ShopCard,
    }
}
import ShopCard from './ShopCard.vue';
</script>

<template>
    <main>
        <div class="showcase">
            <ShopCard/>
        </div>
    </main>
</template>

<style scoped>
.showcase{
    padding: 10% 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
