import api from './index';

export const getAllCoins = async () => {
    const response = await api.get('/');
    return response.data.response.data;
};

export const getCoinDetail = async (symbol: string) => {
    const response = await api.get(`/detail?symbol=${symbol}`);
    console.log('response.data:', response.data.response.data)
    return response.data.response.data;
};

export const getCoinPerformance = async () => {
    const response = await api.get(`/performance`);
    console.log('response.data:', response.data.response.data)
    return response.data.response.data;
};
