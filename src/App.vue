<template>

    <header>
      <Nav></Nav>
    </header>

    <router-view/>

</template>

<script>
    import Nav from './components/Nav.vue';

    export default {
        data() {
            return {

            }
        },
        components: {
            Nav,

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