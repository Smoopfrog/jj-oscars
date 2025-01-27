import { useEffect, useState } from 'react';
import * as watchlistService from '../../api/service/watchlistService';

export const useGetWatchlist = (name: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await watchlistService.getWatchlist(name);
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




    