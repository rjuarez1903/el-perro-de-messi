<template>
    <a :href="urlTarget" target="_blank" class="nav-link">
        <i :class="faIcon" class="social-icon text-dark"></i>
    </a>
</template>

<script>
    export default {
        props: {
            urlTarget: String,
            faIcon: String
        }
    }
</script>

<style scoped>
    .social-icon {
        font-size: 1.5rem;
    }

    .social-icon:hover {
        color: var(--colorBoton) !important;
    }
</style>