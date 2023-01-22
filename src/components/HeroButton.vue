<template>
    <NavItem 
        :routeTo="routeTo" 
        :whereTo="whereTo"
        class="btn hero-btn w-100"
    />
</template>

<script>
    import NavItem from './NavItem.vue';

    export default {
        components: {
            NavItem
        }, 
        props: {
            routeTo: String, 
            whereTo: String
        }
    }
    
</script>

<style scoped>

    .hero-btn {
        background-color: var(--colorBoton);
        border: 2px solid var(--colorBoton);
        padding: 1.25rem 2rem;
        font-size: x-large;
        font-weight: 700;
    }

    .hero-btn:hover {
        background-color: var(--colorPrimario);
        border: 2px solid var(--colorBoton);
        color: var(--colorBoton);
    }

</style>