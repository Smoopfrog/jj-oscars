import { useEffect, useState } from 'react';
import * as watchlistService from '../../api/service/watchlistService';

export type WatchlistData = {
    /** The id of the movie */
    id: number;
    /** The title of the movie */
    title: string;
    /** The nominations of the movie */
    nominations: {
        /** The category of the nomination */   
        category: string;
        /** The nominee of the nomination */
        nominee: string;
    }[];
    /** Whether the movie has been viewed */
    viewed: boolean;
};



export const useGetWatchlist = (name: string) => {
    const [data, setData] = useState<WatchlistData[] | null>(null);
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




    