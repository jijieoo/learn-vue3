import Http from '@/api/modules/ranking';
import to from '@/utils/await-to';
import { ElNotification } from 'element-plus';
import { reactive } from 'vue';

export default function useRanking() {
    const state = reactive({
        rankingList: [],
    });

    /**
     * 加载表格数据
     */
    async function load() {
        const [err, res] = await to(Http.getRanking());
        if (err) {
            ElNotification({
                type: 'error',
                title: '获取积分排名失败',
                message: '请稍后再试',
            });
        }
        state.rankingList = res.map((ranking, index) => ({
            rank: index + 1,
            ...ranking,
        }));
    }

    return {
        state,
        load,
    };
}
