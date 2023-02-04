import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
