<template>

    <header>
      <Nav />
    </header>

    <main class="py-4">
        <router-view/>
    </main>

    <Footer />

</template>

<script>
    import Nav from './components/Nav.vue';
    import Footer from './components/Footer.vue';

    export default {
        data() {
            return {

            }
        },
        components: {
            Nav,
            Footer

        }, 
        computed: {
            currentRouteName() {
                return this.$route.name;
            }, 
        },
}
</script>


<style>
  
  :root {
    --colorPrimario: #171D2D; 
    --colorSecundario: #4b5778;
    --colorFooter: #E6DFED;
    --colorBoton: #F6C26E;
    --claro:#fff;
    --oscuro: #000;
    --bg-claro: #fff;
    --shadow: 10px 10px 20px rgba(0,0,0,0.2);

    /* --colorPrimario: #1B1B1B; 
    --colorSecundario: #525252;
    --colorFooter: #343434;
    --colorBoton: #F6C26E;
    --claro:#000;
    --oscuro: #fff;
    --bg-claro: #1B1B1B
    --shadow: 10px 10px 20px rgba(0,0,0,0.5); */
}

    #app { 
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--colorPrimario);
        color: var(--claro);
        font-family: 'Poppins', sans-serif;
    }

    header {
        font-family: 'Holtwood One SC', serif;
        background-color: var(--colorPrimario);
        /* transition: .3s ease all; */
    }

    /*  ----------
        SCROLL BAR
        ---------- 
    */

    body::-webkit-scrollbar {
        width: 0.5rem;               
    }
    
    body::-webkit-scrollbar-track {
        background: var(--colorFooter);        
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: var(--colorBoton);    
        border-radius: 20px;       
    }

</style>