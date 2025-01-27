export interface INominee {
	/** The movie title */
	movie: string;
	/** If the movie isnt the main nominee, this is the title */
	title?: string;
	/** If the movie is the main nominee, this is the subtitle */
	subtitle?: string;
	/** If the movie is the winner */
	winner?: boolean;
	/** If the movie has been watched */
	watched?: boolean;
}
