export const getResultColor = (winner: string | null, prediction: string | null) => {
	if (!winner || !prediction) return "";
	return winner === prediction ? "success" : "error";
};
