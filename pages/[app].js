import Image from "next/image";
import { allApps } from ".contentlayer/generated";
import Head from "next/head";

export default function App({ app }) {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Head>
				<meta
					name="apple-itunes-app"
					content={"app-id" + app.appStore}
				/>
			</Head>
			<div>
				<div className="flex flex-col items-center rounded-md bg-zinc-200 p-4 text-center text-xl dark:bg-zinc-800">
					<div className="flex flex-col items-center md:flex-row md:text-left">
						<Image
							src={`/apps/${app.name}.png`}
							width="96"
							height="96"
							alt={`${app.name} app icon`}
							className="mr-4 h-24 w-24 rounded-md"
						/>
						<div>
							<h1 className="mb-2 mt-2 text-4xl font-bold md:mt-0">
								{app.name}
							</h1>
							<p>{app.description}</p>
						</div>
					</div>

					<a
						href={"https://apps.apple.com/us/app/id" + app.appStore}
						className="mt-4"
					>
						<Image
							width="160"
							height="60"
							alt="Download on the App Store"
							src="/app-store-badge.svg"
						/>
					</a>
				</div>
				<div
					className="prose prose-xl my-4 dark:prose-invert"
					dangerouslySetInnerHTML={{ __html: app.body.html }}
				/>
			</div>

			<div className="relative h-[52rem]">
				<Image
					src={`/apps/${app.name}Screenshot.png`}
					fill
					alt={`Screenshot of ${app.name}`}
					className="object-contain"
				/>
			</div>
		</div>
	);
}

export const getStaticProps = ({ params }) => {
	const app = allApps.find((app) => app.name.toLowerCase() === params.app);

	return {
		props: {
			app,
			seo: {
				title: app.name,
				description: app.description,
			},
		},
	};
};

export const getStaticPaths = () => ({
	paths: allApps.map((app) => "/" + app.name.toLowerCase()),
	fallback: false,
});
