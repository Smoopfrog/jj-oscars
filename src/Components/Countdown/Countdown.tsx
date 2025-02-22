import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Box, Typography } from "@mui/material";
import CountdownUnit from "./CountdownUnit";
import { Link } from "react-router-dom";

dayjs.extend(duration);

interface ICountdownProps {
	name: string;
}

const Countdown: React.FC<ICountdownProps> = ({ name }) => {
	const targetDate = dayjs("2025-03-02T16:00:00-08:00");
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	function calculateTimeLeft() {
		const now = dayjs();
		const diff = targetDate.diff(now);
		const duration = dayjs.duration(diff);

		return {
			days: Math.floor(duration.asDays()),
			hours: duration.hours(),
			minutes: duration.minutes(),
			seconds: duration.seconds(),
			total: diff,
		};
	}
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<Link to={`/user/${name}/battle`} style={{ textDecoration: "none" }}>
			<Box
				display={{ xs: "none", sm: "flex" }}
				gap={1}
				color="#696969"
				sx={{
					"&:hover": { color: "rgb(199, 159, 39)" },
				}}
			>
				{timeLeft.total >= 0 ? (
					<Box display={"flex"} gap={1}>
						<CountdownUnit value={timeLeft.days} unit="Days" />
						<CountdownUnit value={timeLeft.hours} unit="Hours" />
						<CountdownUnit value={timeLeft.minutes} unit="Minutes" />
						<CountdownUnit value={timeLeft.seconds} unit="Seconds" />
					</Box>
				) : (
					<Typography variant="h1" fontSize={28}>
						{`Oscar Battle ${dayjs().year()}`}
					</Typography>
				)}
			</Box>
		</Link>
	);
};

export default Countdown;
