import React from "react";
import { useGetRequest } from "../../hooks/useGetRequest";
import { IScore } from "../../types/api/Stats/Score";
import urls from "../../api/endpoint";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";

interface IScoresProps {
	/** The username of the user */
	username: string;
	/** The year of the scores */
	year?: number;
}

const Scores: React.FC<IScoresProps> = ({ username, year }) => {
	const params = {
		username,
		opponent: username === "jeff" ? "jordan" : "jeff",
		year,
	};

	const { data, isLoading } = useGetRequest<IScore>(urls.stats.score, params);

	return (
		<StatisticsCard
			title="Score"
			value={
				data
					? `${data.correct_guesses} - ${data.opponent_correct_guesses}`
					: null
			}
			isLoading={isLoading}
		/>
	);
};

export default Scores;
