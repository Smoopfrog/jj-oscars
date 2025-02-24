import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import oscarLogo from "../../Images/oscar-logo.png";
import { capitalize } from "../../utils/formatString";
import TopNavLink from "./TopNavLink";
import SelectMenu from "../Select/SelectMenu";

const TopNav = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/Stats" />;
	}

	const navigate = useNavigate();

	const [tab, setTab] = useState<string>("Stats");
	const handleTabChange = (event: SelectChangeEvent<string>) => {
		setTab(event.target.value);
		if (event.target.value === "Stats") {
			navigate(`/user/${name}`);
		} else {
			navigate(`/user/${name}/${event.target.value}`);
		}
	};

	return (
		<Box
			width={"100%"}
			position={"relative"}
			height={48}
			minHeight={48}
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
			gap={3}
			px={3}
		>
			<Box display={"flex"} alignItems={"center"} gap={1} flex={1}>
				<Link to="/" style={{ textDecoration: "none", marginTop: 1 }}>
					<Box width={36} height={"10%"}>
						<img
							src={oscarLogo}
							alt="home"
							style={{
								objectFit: "contain",
								maxWidth: "100%",
							}}
						/>
					</Box>
				</Link>
				<TopNavLink to={`/user/${name}`} text={capitalize(name)} />
			</Box>
			<Box display={{ xs: "flex", sm: "none" }}>
				<SelectMenu
					value={tab}
					onChange={handleTabChange}
					menuItems={["Stats", "Results", "Picks", "Watchlist"]}
					fontSize={20}
				/>
			</Box>
			<Box
				display={{ xs: "none", sm: "flex" }}
				alignItems={"center"}
				justifyContent={"flex-end"}
				gap={2}
				flex={1}
			>
				<TopNavLink to={`/user/${name}/results`} text="Results" />
				<TopNavLink to={`/user/${name}/picks`} text="Picks" />
				<TopNavLink to={`/user/${name}/watchlist`} text="Watchlist" />
			</Box>
		</Box>
	);
};

export default TopNav;
