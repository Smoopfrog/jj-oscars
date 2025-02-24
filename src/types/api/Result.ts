
export interface IResult {
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