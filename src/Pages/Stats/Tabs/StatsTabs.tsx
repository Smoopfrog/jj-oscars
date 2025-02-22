import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../../Components/Tabs/TabPanel";
import StatisticsCard from "../../../Components/Statistics/StatisticsCard";

const StatsTabs = () => {
	const [tabValue, setTabValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<>
			<Tabs
				value={tabValue}
				onChange={handleChange}
				aria-label="basic tabs example"
			>
				<Tab label="2025" />
				<Tab label="All Time" />
			</Tabs>

			<TabPanel value={tabValue} index={0}>
				<Box display="flex" flexDirection="column" gap={2}>
					<StatisticsCard title="Guess Percentage" value="23/50 (46%)" />
					<StatisticsCard title="Movies Watched" value="23/50 (46%)" />
				</Box>
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				<Box display="flex" flexDirection="column" gap={2}>
					<StatisticsCard title="Guess Percentage" value="23/50 (46%)" />
					<StatisticsCard title="Movies Watched" value="23/50 (46%)" />
				</Box>
			</TabPanel>
		</>
	);
};

export default StatsTabs;
