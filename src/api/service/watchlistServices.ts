import axiosInstance from "../axiosInstance";

export const getWatchlist = (name: string) => axiosInstance.get(`/watchlist/${name}`);
export const putWatchlist = (name: string, data: any) => axiosInstance.put(`/watchlist/${name}`, data);
