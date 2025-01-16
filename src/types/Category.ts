import { INominee } from "./Nominee";

export interface ICategory {
	/** The title of the category */
	title: string;
	/** The nominees for the category */
	nominees: INominee[];
}
