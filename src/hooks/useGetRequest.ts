import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export const useGetRequest = <T>(url: string, params: any) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(url, { params });
                setData(response.data);
            } catch (err: unknown) { 
                if (err instanceof Error) {
                    setError(err.message); 
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, error, isLoading };
};




    