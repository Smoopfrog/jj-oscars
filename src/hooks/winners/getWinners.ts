import { useEffect, useState } from 'react';
import * as winnersService from '../../api/service/winnersService';

export interface IWinnerAPI {
    /** The id of the category */
	id: number;
	/** The name of the category */
	name: string;
	/** The winner of the category */
	winner: string | null;
	/** The prediction of Jeff */
	jeff: string | null;
	/** The prediction of Jordan */
	jordan: string | null;
}

export const useGetWinners = (year: number, username1: string, username2: string) => {
    const [data, setData] = useState<IWinnerAPI[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await winnersService.getWinners(year, username1, username2);
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
    }, [year, username1, username2]);

    return { data, error, isLoading };
};




    