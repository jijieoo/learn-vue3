<template>
    <div>
        <h2 class="ranking-title">积分排名</h2>
        <el-table
            row-key="id"
            :data="state.rankingList"
        >
            <el-table-column
                sortable
                label="排名"
                width="100"
                prop="rank"
            >
            </el-table-column>
            <el-table-column
                sortable
                prop="username"
                label="选手" >
            </el-table-column>
            <el-table-column
                sortable
                prop="balance"
                label="金币" >
            </el-table-column>
            <el-table-column
                label="拥有英雄" >
                <template #default="scope">
                    <el-tag v-for="hero in scope.row.heroes" :key="hero.id" type="info">
                        {{hero.hero_name}}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { ElTable, ElTableColumn, ElTag } from 'element-plus';
import { onMounted } from 'vue';
import useRanking from './uses/index';

export default {
    components: {
        ElTable,
        ElTableColumn,
        ElTag,
    },
    setup() {
        const { state, load } = useRanking();

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
.ranking-title {
    text-align: center;
}
</style>
