import axiosInstance from "../axiosInstance";

export const getPredictions = (name: string) => axiosInstance.get(`/${name}/predictions/`);
export const postPredictions = (name: string, data: any) => axiosInstance.post(`/${name}/predictions/`, data);
