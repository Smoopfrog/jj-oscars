import axiosInstance from "../axiosInstance";

export const getWatchlist = (name: string) => axiosInstance.get(`/${name}/watchlist/`);
export const putWatchlist = (name: string, data: any) => axiosInstance.post(`/${name}/watchlist/update/`, data);
