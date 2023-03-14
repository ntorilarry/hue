import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Darkmode from "./DarkMode";

export default function Switcher() {
	const {colorTheme, setTheme} = Darkmode();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				// style={{ marginBottom: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}