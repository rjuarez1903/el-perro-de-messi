<template>
    <section class="hero">
        <Hero />
    </section>
    <section class="tips">
        <Tips />
    </section>

</template>

<script>
    import Hero from '@/components/Hero.vue';
    import Tips from '@/components/Tips.vue'

    export default {
        components: {
            Hero, 
            Tips
        }
    }
</script>

<style>

    /* .descripcion-index {
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 1.5;
        color: #fff;
    }

    .descripcion-index a {
        color: var(--claro);
        transition: .3s ease all;
    } */

    .tips {
        background-color: var(--colorFooter);
        color: var(--oscuro);
        transform: skewY(12deg);
        /* transition: .3s ease all; */
    }

    @media (min-width: 768px) {
        .tips {
            transform: skewY(7deg);
        }
    }

</style>