<template>
    <div class="info">
        <div class="info__hero">{{hero}}</div>
        <div class="info__user">{{user}}</div>
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
<style lang="less" scoped>
// @define info
.info {
    display: inline-block;
    margin: 0 5px;
    font-size: 12px;
    text-align: center;

    &__hero,
    &__user {
        padding: 5px 10px;
    }
}
</style>
