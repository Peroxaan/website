import { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Newsroom({ posts }) {
	const postList = posts.map((post) => (
		<Link
			key={post.url}
			href={post.url}
			className="py-6 transition-transform ease-in-out hover:scale-[1.01]"
		>
			<time
				dateTime={post.date}
				className="text-lg text-zinc-700 dark:text-zinc-300 md:text-xl"
			>
				{post.formattedDate}
			</time>
			<h1 className="text-2xl font-bold md:text-3xl">
				<Balancer>{post.title}</Balancer>
			</h1>
		</Link>
	));

	return (
		<>
			<h1 className="mb-2 text-4xl font-bold md:text-6xl">Newsroom</h1>
			<p className="text-xl md:text-2xl">
				The latest announcements & updates from the Peroxaan team.
			</p>
			<div className="mt-8 flex flex-col md:mt-16">{postList}</div>
		</>
	);
}

export const getStaticProps = () => {
	const posts = allPosts
		.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
		.map((post) => {
			return {
				title: post.title,
				url: post.url,
				date: post.date,
				formattedDate: post.formattedDate,
			};
		});

	return {
		props: {
			posts,
			seo: {
				title: "Newsroom",
				description:
					"The latest announcements & updates from the Peroxaan team.",
				image: "/newsroom.png",
				imageAlt:
					"Peroxaan Newsroom logo and name on a white background.",
			},
		},
	};
};
