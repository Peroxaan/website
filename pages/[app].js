import Image from "next/image";
import { allApps } from ".contentlayer/generated";
import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";

const ContributorGrid = ({ children }) => (
	<div className="grid grid-cols-1 gap-4">{children}</div>
);

const Contributor = ({ name, role, href }) => (
	<a href={href} className="not-prose no-underline">
		<div className="flex h-full flex-row items-center rounded-md bg-zinc-200 p-4 transition-transform ease-in-out hover:scale-[1.01] dark:bg-zinc-800 md:flex-col lg:flex-row">
			<Image
				alt={name}
				src={"/contributors/" + name + ".jpg"}
				width={96}
				height={96}
				className="mr-4 rounded-full md:mr-0 md:mb-4 lg:mb-0 lg:mr-4"
			/>
			<div>
				<h3 className="text-xl font-bold">{name}</h3>
				<p>{role}</p>
			</div>
		</div>
	</a>
);

export default function App({ app }) {
	const MDXContent = useMDXComponent(app.body.code);

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
					<div className="flex flex-col md:flex-row md:text-left">
						<Image
							src={`/apps/${app.name}.png`}
							width="96"
							height="96"
							alt={`${app.name} app icon`}
							className="mx-auto h-24 w-24 rounded-md md:mr-4"
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
				<div className="prose prose-xl my-4 dark:prose-invert">
					<MDXContent components={{ ContributorGrid, Contributor }} />
				</div>
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
