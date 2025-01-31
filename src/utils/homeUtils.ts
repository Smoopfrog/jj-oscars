export const handleKeyPress = (event: KeyboardEvent, index: number, konamiCodeArray: string[], navigate: Function) => {
    // Check if the key pressed is the same as the current index in the konamiCodeArray
	if (event.key === konamiCodeArray[index]) {
		index++;
		if (index === konamiCodeArray.length) {
			navigate("/user/jeff"); // Navigate to Jeff's page
			index = 0; // Reset index
		}
	} else {
		index = 0; // Reset index if the sequence is broken
	}
	return index; // Return the updated index
};