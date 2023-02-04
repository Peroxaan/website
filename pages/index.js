import Hero from "@/components/Hero";
import AppCard from "@/components/AppCard";
import { allApps } from ".contentlayer/generated";

export default function Home({ apps }) {
	return (
		<>
			<Hero />

			<div className="mx-auto grid grid-cols-1 gap-6 md:mt-32 lg:grid-cols-3">
				{apps.map(({ name, description, color }) => (
					<AppCard
						name={name}
						description={description}
						color={color}
						key={name}
					/>
				))}
			</div>
		</>
	);
}

export function getStaticProps() {
	// Sort by priority and only include data needed for client render.
	const apps = allApps
		.sort((a, b) => a.priority - b.priority)
		.map((app) => ({
			name: app.name,
			description: app.description,
			color: app.color,
		}));

	return {
		props: {
			apps,
		},
	};
}
