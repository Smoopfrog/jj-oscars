import { Box } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../../Components/Tabs/TabPanel";
import StatsTab from "./StatsTab";
import Tabs from "../../../Components/Tabs/Tabs";

interface IStatsTabsProps {
	name: string;
}

const StatsTabs: React.FC<IStatsTabsProps> = ({ name }) => {
	const [tabValue, setTabValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<Box>
			<Tabs
				tabs={["All Time", "2025"]}
				tabValue={tabValue}
				handleChange={handleChange}
			/>
			<TabPanel value={tabValue} index={0}>
				<StatsTab name={name} />
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				<StatsTab name={name} year={2025} />
			</TabPanel>
		</Box>
	);
};

export default StatsTabs;
