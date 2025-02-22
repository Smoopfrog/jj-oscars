import axiosInstance from "../axiosInstance";

export const getStats = (username: string, year?: number) => axiosInstance.get(
    `/stats/${username}/${year || ''}`
);
