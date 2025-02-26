import { IResult } from "../types/api/Result";

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatStatValue = (value: number , total: number, showPercentage: boolean = true) => {
	if (value === 0 && total === 0) return "-";

	return `${value}/${total} ${showPercentage ? `(${((value / total) * 100).toFixed(2)}%)` : ""}`;
};

export const formatWinnerValue = (winner: string, opponentCorrectGuesses: number, correctGuesses: number) => {


	return `${capitalize(winner)} (${correctGuesses}-${opponentCorrectGuesses})`;
};


export const winCount = (data: IResult[] | null, name: "jordan" | "jeff") => {
	if (!data) return 0;

	return data.filter(
		(category: IResult) =>
			category.winner && category.winner === category[name]
	).length;
};