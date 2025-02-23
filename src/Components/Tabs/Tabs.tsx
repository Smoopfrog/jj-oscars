import React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";

interface ITabsProps {
	tabs: string[];
	tabValue: number;
	handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Tabs: React.FC<ITabsProps> = ({ tabs, tabValue, handleChange }) => {
	return (
		<MuiTabs
			value={tabValue}
			onChange={handleChange}
			variant="scrollable"
			scrollButtons
			allowScrollButtonsMobile
			sx={{
				width: { xs: "100%", md: 500 },
				maxWidth: { xs: 380, md: 500 },
				textTransform: "none",
				border: "1px solid black",
				borderLeft: "none",
				borderRight: "none",
				"& .MuiButtonBase-root.Mui-disabled": {
					opacity: 0.4,
				},
			}}
			TabIndicatorProps={{
				style: {
					display: "none",
				},
			}}
		>
			{tabs.map((tab, index) => (
				<Tab
					key={index}
					label={tab}
					sx={{
						minWidth: 70,
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
			))}
		</MuiTabs>
	);
};

export default Tabs;
