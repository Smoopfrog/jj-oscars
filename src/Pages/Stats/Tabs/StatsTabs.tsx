import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../../Components/Tabs/TabPanel";
import StatsTab from "./StatsTab";

const StatsTabs = () => {
	const [tabValue, setTabValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<Box>
			<Tabs
				value={tabValue}
				onChange={handleChange}
				aria-label="Oscar Battle Stats"
				sx={{
					textTransform: "none",
					border: "1px solid black",
					borderLeft: "none",
					borderRight: "none",
				}}
				TabIndicatorProps={{
					style: {
						display: "none",
					},
				}}
			>
				<Tab
					label="All Time"
					sx={{
						textTransform: "none",
						color: "black",
						"&.Mui-selected": {
							color: "rgb(199, 159, 39)",
						},
						"&:hover": {
							color: "rgb(199, 159, 39, 0.5)",
						},
					}}
				/>
				<Tab
					label="2025"
					sx={{
						color: "black",
						"&.Mui-selected": {
							color: "rgb(199, 159, 39)",
						},
						"&:hover": {
							color: "rgb(199, 159, 39, 0.5)",
						},
					}}
				/>
			</Tabs>

			<TabPanel value={tabValue} index={0}>
				<StatsTab />
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				<StatsTab year={2025} />
			</TabPanel>
		</Box>
	);
};

export default StatsTabs;
