import React from "react";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import { useGetRequest } from "../../hooks/useGetRequest";
import {
	capitalize,
	formatStatValue,
	formatWinnerValue,
} from "../../utils/formatString";
import { IWatchCount } from "../../types/api/Stats/WatchCount";
import urls from "../../api/endpoint";
import { IWinner } from "../../types/api/Stats/Winner";

interface IWinnerProps {
	/** The username of the user */
	username: string;
	/** The year of the watched count */
	year?: number;
}

const Winner: React.FC<IWinnerProps> = ({ username, year }) => {
	const params = {
		username,
		year,
	};

	const { data, isLoading } = useGetRequest<IWinner>(urls.stats.winner, params);

	return (
		<StatisticsCard
			title="Winner"
			value={
				data
					? formatWinnerValue(
							data?.winner,
							data?.opponent_correct_guesses,
							data?.correct_guesses
					  )
					: null
			}
			isLoading={isLoading}
		/>
	);
};

export default Winner;
