<template>
    <section>
        <el-menu default-active="ranking" mode="horizontal">
            <el-menu-item index="ranking">积分排名</el-menu-item>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
import { ElMenu, ElMenuItem } from 'element-plus';

export default {
    components: {
        ElMenu,
        ElMenuItem,
    },
};
</script>
