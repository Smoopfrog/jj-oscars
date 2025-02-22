import { useEffect, useState } from 'react';
import * as statsService from '../../api/service/statsSerice';
import { ICategory } from '../../types/Category';

export const useGetStats = (username: string, year?: number) => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await statsService.getStats(username, year);
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
    }, [name]);

    return { data, error, isLoading };
};




    