import axiosInstance from "../api/axiosInstance";

export const usePostRequest = async (url: string, data: any): Promise<any> => {
    try {
      return await axiosInstance.post(url, data)
    } catch (err) {
        return err;
    }
};