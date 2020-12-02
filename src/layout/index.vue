<template>
    <section>
        <el-menu
            :default-active="$route.path" mode="horizontal" :router="true" @select="selectMenu"
        >
            <el-menu-item index="/ranking">积分排名</el-menu-item>
            <el-menu-item index="/match-record">比赛记录</el-menu-item>
        </el-menu>
        <div>
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
import { ElMenu, ElMenuItem } from 'element-plus';
import router from '@/router';

export default {
    components: {
        ElMenu,
        ElMenuItem,
    },
    setup() {
        function selectMenu(index) {
            router.push(index);
        }

        return {
            selectMenu,
        };
    },
};
</script>
