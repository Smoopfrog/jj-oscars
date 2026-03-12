import {
	Box,
	CircularProgress,
	FormControl,
	FormLabel,
	RadioGroup,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import Nominee from "./Nominee";
import { INominee } from "../../types/Nominee";

interface IWinnersCategoryProps {
	/** The id of the category */
	id: number;
	/** The title of the category */
	title: string;
	/** The nominees for the category */
	nominees: INominee[];
	/** The currently selected winner id */
	selectedValue: number | null;
	/** Called when a winner is saved successfully */
	onSaved?: () => void;
	/** Called to save the winner (categoryId, nomineeId) */
	onSave: (categoryId: number, nomineeId: number) => Promise<void>;
}

const WinnersCategory: React.FC<IWinnersCategoryProps> = ({
	id,
	title,
	nominees,
	selectedValue,
	onSave,
	onSaved,
}) => {
	const [isSaving, setIsSaving] = useState(false);
	const [localValue, setLocalValue] = useState<string>(String(selectedValue ?? ""));

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const nomineeId = Number((e.target as HTMLInputElement).value);
		setLocalValue(String(nomineeId));
		setIsSaving(true);
		try {
			await onSave(id, nomineeId);
			onSaved?.();
		} catch {
			// Revert on error
			setLocalValue(String(selectedValue ?? ""));
			alert("Something went wrong. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};

	// Sync local value when selectedValue changes (e.g. after refetch)
	React.useEffect(() => {
		setLocalValue(String(selectedValue ?? ""));
	}, [selectedValue]);

	return (
		<Box
			id={title}
			display="flex"
			flexDirection="column"
			position="relative"
		>
			{isSaving && (
				<Box
					position="absolute"
					top={8}
					right={0}
					display="flex"
					alignItems="center"
					gap={1}
				>
					<CircularProgress size={20} sx={{ color: "rgb(199, 159, 39)" }} />
					<Typography variant="caption" color="rgb(199, 159, 39)">
						Saving...
					</Typography>
				</Box>
			)}
			<FormLabel id={`${title}-radio-buttons-group-label`}>
				<Typography
					color="rgb(199, 159, 39)"
					fontSize={32}
					textTransform="uppercase"
					lineHeight={1.2}
					mb={0.5}
				>
					{title}
				</Typography>
			</FormLabel>
			<FormControl>
				<RadioGroup
					aria-labelledby={`${title}-radio-buttons-group-label`}
					name={String(id)}
					value={localValue}
					onChange={handleChange}
					sx={{ display: "flex", flexDirection: "column", gap: 1 }}
				>
					{nominees.map((nominee, i) => (
						<Nominee nominee={nominee} key={i} />
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default WinnersCategory;
