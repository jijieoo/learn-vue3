import { get } from '../http';

export default {
    getMatchRecords: (params) => get('/api/matches', { params }),
};
