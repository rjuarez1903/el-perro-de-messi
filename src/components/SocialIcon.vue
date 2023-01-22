<template>
    <a :href="urlTarget" target="_blank" class="nav-link">
        <i :class="faIcon" class="nav-link text-dark"></i>
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