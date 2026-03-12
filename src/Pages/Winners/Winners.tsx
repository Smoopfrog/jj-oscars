import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import YearSelect from "../../Components/Select/YearSelect";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import urls from "../../api/endpoint";
import { useGetRequest } from "../../hooks/useGetRequest";
import { ICategory } from "../../types/Category";
import WinnersForm from "./WinnersForm";
import dayjs from "dayjs";
import jordan from "../../Images/jordan.jpg";
import oscarLogo from "../../Images/oscar-logo.png";

const Winners = () => {
	const [year, setYear] = useState<number>(dayjs().year());

	const { data, isLoading } = useGetRequest<ICategory[]>(
		urls.winners,
		{ year },
		[year]
	);

	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100vh"
			sx={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
					url(${jordan})`,
				backgroundSize: { xs: "contain", sm: "cover" },
				backgroundRepeat: { xs: "repeat", sm: "no-repeat" },
				backgroundAttachment: "fixed",
			}}
		>
			<Box
				width="100%"
				height={48}
				minHeight={48}
				display="flex"
				alignItems="center"
				px={3}
			>
				<Link
					component={RouterLink}
					to="/"
					style={{ textDecoration: "none", marginTop: 1 }}
				>
					<Box width={36} height="10%">
						<img
							src={oscarLogo}
							alt="home"
							style={{ objectFit: "contain", maxWidth: "100%" }}
						/>
					</Box>
				</Link>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap={2}
				maxHeight="calc(100vh - 80px)"
				px={2}
			>
			<Box display="flex" gap={1} alignItems="center">
				<Typography variant="h4" color="#E0E0E0">
					Select Winners
				</Typography>
				<YearSelect year={year} setYear={setYear} />
			</Box>
			{!isLoading ? (
				data ? (
					<WinnersForm categories={data} year={year} />
				) : (
					<ErrorMessage />
				)
			) : (
				<LoadingSpinner />
			)}
			</Box>
		</Box>
	);
};

export default Winners;
