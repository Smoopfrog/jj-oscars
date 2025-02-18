import { useEffect, useState } from 'react';
import * as predictionsService from '../../api/service/predictionsSerivce';
import { ICategory } from '../../types/Category';

export const useGetPredictions = (name: string) => {
    const [data, setData] = useState<ICategory[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await predictionsService.getPredictions(name);
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




    