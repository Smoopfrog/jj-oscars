import React from "react";
import { useGetRequest } from "../../hooks/useGetRequest";
import { IWatchCount } from "../../types/api/Stats/WatchCount";
import urls from "../../api/endpoint";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import { formatStatValue } from "../../utils/formatString";
import { IGuessAccuracy } from "../../types/api/Stats/GuessAccuracy";

interface IGuessAccuracyProps {
	/** The username of the user */
	username: string;
	/** The year of the guess accuracy */
	year?: number;
}

const GuessAccuracy: React.FC<IGuessAccuracyProps> = ({ username, year }) => {
	const params = {
		username,
		year,
	};

	const { data, isLoading } = useGetRequest<IGuessAccuracy>(
		urls.stats.guessAccuracy,
		params
	);

	return (
		<StatisticsCard
			title="Guess Accuracy"
			value={formatStatValue(data?.correct_guesses, data?.total_categories)}
			isLoading={isLoading}
		/>
	);
};

export default GuessAccuracy;
