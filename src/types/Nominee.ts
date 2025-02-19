export interface INominee {
	/** The id of the nominee */
	id: number;
	/** If the movie isnt the main nominee, this is the title */
	title: string;
	/** If the movie is the main nominee, this is the subtitle */
	subtitle: string;
	/** If the movie is the winner */
	winner?: boolean;
}
