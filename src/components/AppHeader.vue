<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
         <nav class="navbar">
            <div class="navbar_redirects">
                <a aria-disabled="true">Donna</a>
                <a aria-disabled="true">Uomo</a>
                <a aria-disabled="true">Bambini</a>
            </div>

            <img class="logo" src="/img/boolean-logo.png" alt="">

            <div class="navbar_redirects">
                <a aria-disabled="true"><i class="fa-regular fa-user"></i></a>
                <a aria-disabled="true"><i class="fa-regular fa-heart"></i></a>
                <a aria-disabled="true"><i class="fa-solid fa-bag-shopping"></i></a>
            </div>
        </nav> 
    </header>
</template>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    background-color: 255, 140, 0;
    padding: 1rem 0;
    background-color: rgb(255, 140, 0);

    img {
    max-width: 100%;
    max-height: 100%;
    }

    .navbar_redirects{
        display: flex;
        gap: 1rem;
        color: white;
    }
}
</style>
