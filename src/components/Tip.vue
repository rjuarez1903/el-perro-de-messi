<template>
    <div class="d-flex flex-column align-items-start gap-1 col-lg-4" :class="colMdAlign">
        <i :class="faIcon"></i>
        <h2 class="fw-bold">{{ title }}</h2>
        <p class="text-start">{{ txt }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            colMdAlign: String,
            faIcon: String,
            title: String,
            txt: String,
        }
    }
</script>

<style scoped>
    i {
        font-size: 1.5rem;
    }
</style>