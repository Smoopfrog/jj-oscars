import axiosInstance from "../axiosInstance";

export const getWinners = (year: number, username1: string, username2: string) => axiosInstance.get(
    `/winners/${year}/${username1}/${username2}/`
);
