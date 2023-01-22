<template>
    <li class="nav-item">
        <router-link :to="routeTo" class="nav-link">{{ whereTo }}</router-link>
    </li>
</template>

<script>
    export default {
        props: {
            routeTo: String,
            whereTo: String
        }
    }
</script>