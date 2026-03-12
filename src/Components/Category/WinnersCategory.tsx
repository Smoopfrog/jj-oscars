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
	/** Called to save the winner (categoryId, nomineeId or null to clear) */
	onSave: (categoryId: number, nomineeId: number | null) => Promise<void>;
}

const WinnersCategory: React.FC<IWinnersCategoryProps> = ({
	id,
	title,
	nominees,
	selectedValue,
	onSave,
}) => {
	const [isSaving, setIsSaving] = useState(false);
	const [localValue, setLocalValue] = useState<string>(String(selectedValue ?? ""));

	const save = async (nomineeId: number | null) => {
		setIsSaving(true);
		try {
			await onSave(id, nomineeId);
			setLocalValue(nomineeId !== null ? String(nomineeId) : "");
		} catch {
			setLocalValue(String(selectedValue ?? ""));
			alert("Something went wrong. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const nomineeId = Number((e.target as HTMLInputElement).value);
		setLocalValue(String(nomineeId));
		await save(nomineeId);
	};

	// Sync local value when selectedValue changes (e.g. initial load or year change)
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
						<Nominee
							nominee={nominee}
							key={i}
							isSelected={Number(localValue) === nominee.id}
							onClearClick={() => save(null)}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default WinnersCategory;
