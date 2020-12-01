import { get } from '../http';

export default {
    getRanking: (params) => get('/api/ranking', { params }),
};
