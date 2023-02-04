import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	function toggleTheme() {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}
	const Icon = mounted && resolvedTheme === "dark" ? IconSun : IconMoon;

	return (
		<button
			aria-label="Switch themes"
			onClick={toggleTheme}
			className="rounded-lg p-2 align-baseline transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 xl:mr-4"
		>
			<Icon size={24} />
		</button>
	);
}
