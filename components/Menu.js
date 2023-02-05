import {
	IconBrandInstagram,
	IconMenu,
	IconX,
	IconBrandTwitter,
	IconBrandGithub,
} from "@tabler/icons-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = {
	Newsroom: "/newsroom",
	Ruby: "/ruby",
	Talon: "/talon",
	Evergreen: "/evergreen",
};

export default function Menu({ open, setOpen }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		window.addEventListener("resize", () => {
			if (window.innerWidth >= 1024) {
				setOpen(false);
				document.body.classList.remove("overflow-hidden");
			}
		});
	}, [setOpen]);

	function toggle() {
		setOpen(!open);
	}

	if (open && mounted) {
		document.body.classList.add("overflow-hidden");
	} else if (mounted) {
		document.body.classList.remove("overflow-hidden");
	}

	const Icon = open ? IconX : IconMenu;

	const links = Object.entries(navLinks).map(([name, href]) => (
		<Link
			href={href}
			className="py-4 text-xl font-semibold"
			key={href}
			onClick={() => {
				setOpen(false);
			}}
		>
			{name}
		</Link>
	));

	return (
		<>
			<button
				aria-label="Toggle menu"
				onClick={toggle}
				className="w-10 rounded-lg p-2 align-baseline transition-colors ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 lg:hidden"
			>
				<Icon />
			</button>
			<div
				className={clsx(
					"top-0 left-0 -z-10 h-screen w-screen bg-white/70 backdrop-blur-md transition-colors ease-in-out dark:bg-black/70",
					{
						absolute: open,
						hidden: !open,
					}
				)}
			>
				<div className="mx-6 flex h-full flex-col justify-between py-20">
					<div className="flex flex-col divide-y divide-zinc-400 dark:divide-zinc-600">
						{links}
					</div>
					<div className="mx-auto flex flex-row">
						<a
							href="https://twitter.com/Peroxaan"
							aria-label="Peroxaan on Twitter"
							className="p-4"
						>
							<IconBrandTwitter size={32} />
						</a>
						<a
							href="https://instagram.com/Peroxaan"
							aria-label="Peroxaan on Instagram"
							className="p-4"
						>
							<IconBrandInstagram size={32} />
						</a>
						<a
							href="https://github.com/Peroxaan"
							aria-label="Peroxaan on GitHub"
							className="p-4"
						>
							<IconBrandGithub size={32} />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
