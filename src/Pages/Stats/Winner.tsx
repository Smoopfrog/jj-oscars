import React from "react";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import { useGetRequest } from "../../hooks/useGetRequest";
import { capitalize, formatWinnerValue } from "../../utils/formatString";
import urls from "../../api/endpoint";
import { IScore } from "../../types/api/Stats/Score";

interface IWinnerProps {
	/** The username of the user */
	username: string;
	/** The year of the watched count */
	year?: number;
}

const Winner: React.FC<IWinnerProps> = ({ username, year }) => {
	const params = {
		username,
		opponent: username === "jeff" ? "jordan" : "jeff",
		year,
	};

	const { data, isLoading } = useGetRequest<IScore>(urls.stats.score, params);

	return (
		<StatisticsCard
			title="Winner"
			value={data ? capitalize(data.winner) : null}
			isLoading={isLoading}
		/>
	);
};

export default Winner;
