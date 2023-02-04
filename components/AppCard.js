import Link from "next/link";
import clsx from "clsx";

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
				"flex flex-col rounded-md drop-shadow transition ease-in-out",
				colorMap[color]
			)}
			href={"/" + name.toLowerCase()}
		>
			<h1 className="mb-2 px-6 pt-6 text-4xl font-extrabold">{name}</h1>
			<p className="flex-grow px-6 pb-6 text-xl">{description}</p>
		</Link>
	);
}
