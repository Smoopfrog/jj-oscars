export interface IScore {
    /** The winner  */
    winner: string;
    /** The number of correct guesses for the user */
    correct_guesses: number;
    /** The number of correct guesses for the opponent */
    opponent_correct_guesses: number;
}

