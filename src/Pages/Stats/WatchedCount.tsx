import React from "react";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import { useGetRequest } from "../../hooks/useGetRequest";
import { formatStatValue } from "../../utils/formatString";
import { IWatchCount } from "../../types/api/Stats/WatchCount";
import urls from "../../api/endpoint";

interface IWatchedCountProps {
	/** The username of the user */
	username: string;
	/** The year of the watched count */
	year?: number;
}

const WatchedCount: React.FC<IWatchedCountProps> = ({ username, year }) => {
	const params = {
		username,
		year,
	};

	const { data, isLoading } = useGetRequest<IWatchCount>(
		urls.stats.watchedCount,
		params
	);

	return (
		<StatisticsCard
			title="Movies Watched"
			value={
				data ? formatStatValue(data.watched_movies, data.total_movies) : null
			}
			isLoading={isLoading}
		/>
	);
};

export default WatchedCount;
