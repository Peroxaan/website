import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState, useEffect } from "react";
import clsx from "clsx";
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandTwitter,
} from "@tabler/icons-react";
import Menu from "./Menu";
import PeroxaanIcon from "./PeroxaanIcon";

const navLinks = {
	Newsroom: "/newsroom",
	Ruby: "/ruby",
	Talon: "/talon",
	Evergreen: "/evergreen",
};

const links = Object.entries(navLinks).map(([name, href]) => (
	<Link
		href={href}
		className="rounded-lg px-6 py-2 transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800"
		key={href}
	>
		{name}
	</Link>
));

export default function Navbar() {
	const [solid, setSolid] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const offset = 50;

		function handleScroll() {
			if (!solid && window.scrollY > offset) {
				setSolid(true);
			} else if (solid && window.scrollY <= offset) {
				setSolid(false);
			}
		}
		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () =>
			window.removeEventListener("scroll", handleScroll, {
				passive: true,
			});
	}, [solid]);

	return (
		<nav
			className={clsx(
				"sticky top-0 z-20 flex h-24 flex-row items-center justify-between px-4 backdrop-blur-md transition-colors ease-in-out md:px-8 xl:px-20",
				{ "bg-white/70 dark:bg-black/70": solid && !open }
			)}
		>
			<Link
				href="/"
				className="rounded-lg px-2 py-2 text-2xl font-extrabold transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 xl:px-6"
			>
				<div className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-pink-600">
					<PeroxaanIcon className="mr-2 inline-block align-text-bottom text-pink-600 dark:text-pink-400" />
					Peroxaan
				</div>
			</Link>
			<div className="hidden text-xl font-semibold lg:block">{links}</div>
			<div className="flex flex-row items-center">
				<a
					href="https://twitter.com/peroxaan"
					aria-label="Visit Peroxaan on Twitter"
				>
					<IconBrandTwitter className="hidden h-full w-10 rounded-lg p-2 transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 lg:block" />
				</a>
				<a
					href="https://instagram.com/peroxaan"
					aria-label="Visit Peroxaan on Instagram"
				>
					<IconBrandInstagram className="hidden h-full w-10 rounded-lg p-2 transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 lg:block" />
				</a>
				<a
					href="https://github.com/peroxaan"
					aria-label="Visit Peroxaan on GitHub"
				>
					<IconBrandGithub className="hidden h-full w-10 rounded-lg p-2 transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 lg:block" />
				</a>

				<ThemeSwitch />
				<Menu open={open} setOpen={setOpen} />
			</div>
		</nav>
	);
}
