import axiosInstance from "../axiosInstance";

export const putWatchlist = (data: any) => axiosInstance.post(`/watchlist/update/`, data);
