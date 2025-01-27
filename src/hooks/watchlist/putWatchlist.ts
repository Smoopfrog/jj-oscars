import { putWatchlist as putWatchlistService } from "../../api/service/watchlistService";

export const putWatchlist = async (name: string, values: any) => {
    try {
        await putWatchlistService(name, values);
        alert(`Watched ${Object.keys(values)[0]}`);
    } catch (err) {
        console.log(err);
    }
};