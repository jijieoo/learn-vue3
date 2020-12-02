import { reactive } from 'vue';
import Http from '@/api/modules/match-record';
import to from '@/utils/await-to';
import { ElNotification } from 'element-plus';

export default function useMatchRecord() {
    // 数据状态
    const state = reactive({
        // 比赛记录
        matchRecords: [],
        // 激活面板
        activeNames: [],
    });

    async function load() {
        const [err, res] = await to(Http.getMatchRecords());
        if (err) {
            ElNotification({
                type: 'error',
                title: '获取比赛记录失败',
                message: '请稍后尝试',
            });
        }
        state.matchRecords = res;
        state.activeNames = res.map((matchDay) => matchDay.id);
    }

    return {
        state,
        load,
    };
}
