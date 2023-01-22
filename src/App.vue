<template>

    <header>
      <Nav />
    </header>

    <router-view/>

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
    

</style>