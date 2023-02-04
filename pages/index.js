import Hero from "@/components/Hero";
import AppCard from "@/components/AppCard";
import { allApps } from ".contentlayer/generated";

export default function Home() {
	return (
		<>
			<Hero />

			<div className="mx-auto grid grid-cols-1 gap-6 md:mt-32 lg:grid-cols-3">
				{allApps.map(({ name, description, color }) => (
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
