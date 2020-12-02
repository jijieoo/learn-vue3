<template>
    <div>
        <h2 class="match-title">比赛记录</h2>
        <el-table
            row-key="id"
            :data="state.records"
        >
            <!-- <el-table-column
                type="index"
                :index="index => index + 1"
                label="#"
                width="100"
            >
            </el-table-column> -->
            <el-table-column label="天辉">
                <template #default="scope">
                    <user-hero
                        v-for="radiant in scope.row.radiant_records"
                        :key="radiant.id"
                        :user="radiant.user.username"
                        :hero="radiant.hero.hero_name"
                    ></user-hero>
                </template>
            </el-table-column>
            <el-table-column label="夜魇">
                <template #default="scope">
                    <user-hero
                        v-for="dire in scope.row.dire_records"
                        :key="dire.id"
                        :user="dire.user.username"
                        :hero="dire.hero.hero_name"
                    ></user-hero>
                </template>
            </el-table-column>
            <el-table-column
                prop="start"
                label="开始时间" >
            </el-table-column>
            <el-table-column
                prop="duration"
                label="比赛时长" >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
import UserHero from './user-hero.vue';
import useMatchRecord from './uses/index';

export default {
    components: {
        ElTable,
        ElTableColumn,
        UserHero,
    },
    setup() {
        const { state, load } = useMatchRecord();

        onMounted(() => {
            load();
        });

        return {
            state,
        };
    },
};
</script>
<style lang="less" scoped>
.match-title {
    text-align: center;
}
</style>
