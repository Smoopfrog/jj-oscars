import axiosInstance from "../axiosInstance";

export const getPredictions = (name: string) => axiosInstance.get(`/predictions/${name}`);
export const postPredictions = (name: string, data: any) => axiosInstance.post(`/predictions/${name}`, data);
