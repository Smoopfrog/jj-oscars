import { INominee } from "./Nominee";

export interface ICategory {
	/** The id of the category */
	id: number;
	/** The title of the category */
	title: string;
	/** The nominees for the category */
	nominees: INominee[];
	/** The prediction for the category */
	prediction: number | null;
}
