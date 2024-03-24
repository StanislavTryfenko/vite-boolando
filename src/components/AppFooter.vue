<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <nav class="navbar">
            <div>
                <h4><strong>Boolando s.r.l.</strong></h4>
                <a aria-disabled="true">Informazioni legali</a>
                <a aria-disabled="true">Informativa sulla privacy</a>
                <a aria-disabled="true">Diritti di recesso</a>
            </div>

            <div>
                <h5>Trovaci anche su</h5>
                <a aria-disabled="true"><i class="fa-brands fa-square-twitter"></i></a>
                <a aria-disabled="true"><i class="fa-brands fa-square-facebook"></i></a>
                <a aria-disabled="true"><i class="fa-brands fa-square-instagram"></i></a>
                <a aria-disabled="true"><i class="fa-brands fa-square-pinterest"></i></a>
                <a aria-disabled="true"><i class="fa-brands fa-square-youtube"></i></a>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
footer{
    background-color: black;
    color: white;
    display: block;
    bottom: 0%;
    width: 100%;
    height: 4rem;
    border-bottom: 2px solid gray;

    .navbar{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}
</style>