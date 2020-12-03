<template>
    <div class="match">
        <h2 class="match__title">比赛记录</h2>
        <div class="match__content">
            <div v-for="matchDay in state.matchRecords" :key="matchDay.id">
                <p>{{ matchDay.datetime }}</p>
                <el-table
                    row-key="id"
                    :data="matchDay.matches"
                >
                    <el-table-column
                        prop="games"
                        label="#"
                        width="50"
                    >
                    </el-table-column>
                    <el-table-column label="天辉" width="400">
                        <template #default="scope">
                            <user-hero
                                v-for="radiant in scope.row.radiant_records"
                                :key="radiant.id"
                                :user="radiant.user.username"
                                :hero="radiant.hero.hero_name"
                            ></user-hero>
                        </template>
                    </el-table-column>
                    <el-table-column label="夜魇" width="400">
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
                        prop="end"
                        label="结束时间" >
                    </el-table-column>
                    <el-table-column
                        prop="duration"
                        label="比赛时长" >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import {
    ElTable, ElTableColumn,
} from 'element-plus';
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
// @define match
.match {
    &__title {
        text-align: center;
    }

    &__content {
        width: 1200px;
        margin: 0 auto;
    }
}
</style>
