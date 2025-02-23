import { Box } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../../Components/Tabs/TabPanel";
import StatsTab from "./StatsTab";
import Tabs from "../../../Components/Tabs/Tabs";
import { yearsString } from "../../../constants/Years";

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
				tabs={["All Time", ...yearsString]}
				tabValue={tabValue}
				handleChange={handleChange}
			/>
			<TabPanel value={tabValue} index={0}>
				<StatsTab name={name} />
			</TabPanel>
			{yearsString.map((year, index) => (
				<TabPanel value={tabValue} index={index + 1} key={year}>
					<StatsTab name={name} year={Number(year)} />
				</TabPanel>
			))}
		</Box>
	);
};

export default StatsTabs;
