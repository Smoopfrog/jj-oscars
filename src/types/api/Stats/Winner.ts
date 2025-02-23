export interface IWinner {
	/** The winner */
	winner: string;
	/** The opponent's correct guesses */
	opponent_correct_guesses: number;
	/** The user's correct guesses */
	correct_guesses: number;
}
