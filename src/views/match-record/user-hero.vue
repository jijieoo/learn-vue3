<template>
    <div class="user-hero">
        <div class="hero">{{hero}}</div>
        <div class="user">{{user}}</div>
    </div>
</template>

<script>
export default {
    props: {
        hero: {
            type: String,
            default: '',
        },
        user: {
            type: String,
            default: '',
        },
    },
};
</script>
<style scoped>
.user-hero {
    display: inline-block;
    margin: 0 5px;
    text-align: center;
}

.hero,
.user {
    padding: 5px 10px;
}
</style>
