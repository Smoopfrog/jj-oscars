import { INomination } from "./Nomination";

export interface IWatchlist {
    /** The id of the movie */
    id: number;
    /** The title of the movie */
    title: string;
    /** The nominations of the movie */
    nominations: INomination[];
    /** Whether the movie has been viewed */
    viewed: boolean;
};
