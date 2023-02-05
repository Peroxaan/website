import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function AppCard({ name, description, color = "zinc" }) {
	const colorMap = {
		zinc: "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-900",
		red: "bg-red-200 hover:bg-red-300 dark:bg-red-800 dark:hover:bg-red-900",
		purple: "bg-purple-200 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-900",
		green: "bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-900",
	};

	return (
		<Link
			className={clsx(
				"rounded-md p-6 drop-shadow transition ease-in-out",
				colorMap[color]
			)}
			href={"/" + name.toLowerCase()}
		>
			<Image
				width="44"
				height="44"
				alt={name + " app icon"}
				src={`/apps/${name}.png`}
				className="float-left mr-2 rounded-md align-top"
			/>
			<h1 className="mb-2 text-4xl font-extrabold">{name}</h1>
			<p className="text-xl">{description}</p>
		</Link>
	);
}
