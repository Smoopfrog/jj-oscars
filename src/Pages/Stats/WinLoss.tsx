import React from "react";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import { IWinLoss } from "../../types/api/Stats/WinLoss";

interface IWinLossProps {
	/** The username of the user */
	username: string;
}

const WinLoss: React.FC<IWinLossProps> = ({ username }) => {
	const params = {
		username,
		opponent: username === "jeff" ? "jordan" : "jeff",
	};

	const { data, isLoading } = useGetRequest<IWinLoss>(
		urls.stats.winLoss,
		params
	);

	return (
		<StatisticsCard
			title="W/L"
			value={`${data?.user_wins} - ${data?.opponent_wins}`}
			isLoading={isLoading}
		/>
	);
};

export default WinLoss;
