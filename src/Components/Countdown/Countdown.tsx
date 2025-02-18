import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Box } from "@mui/material";
import CountdownUnit from "./CountdownUnit";

dayjs.extend(duration);

const Countdown = () => {
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
		};
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<Box display={"flex"} gap={1}>
			<CountdownUnit value={timeLeft.days} unit="Days" />
			<CountdownUnit value={timeLeft.hours} unit="Hours" />
			<CountdownUnit value={timeLeft.minutes} unit="Minutes" />
			<CountdownUnit value={timeLeft.seconds} unit="Seconds" />
		</Box>
	);
};

export default Countdown;
