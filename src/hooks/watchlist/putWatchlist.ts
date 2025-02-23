import { putWatchlist as putWatchlistService } from "../../api/service/watchlistService";

export const putWatchlist = async (values: any) => {
    try {
        await putWatchlistService( values);
    } catch (err) {
        console.log(err);
    }
};