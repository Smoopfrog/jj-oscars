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

	const years: string[] = ["2025", "2024", "2023", "2022", "2021", "2020"];

	return (
		<Box>
			<Tabs tabs={years} tabValue={tabValue} handleChange={handleChange} />
			<TabPanel value={tabValue} index={0}>
				<StatsTab name={name} />
			</TabPanel>
			{years.map((year, index) => (
				<TabPanel value={tabValue} index={index + 1} key={year}>
					<StatsTab name={name} year={Number(year)} />
				</TabPanel>
			))}
		</Box>
	);
};

export default StatsTabs;
