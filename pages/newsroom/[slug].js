import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from ".contentlayer/generated";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

const CustomImage = (props) => (
	// Alt text is passed in through props
	// eslint-disable-next-line jsx-a11y/alt-text
	<Image className="rounded-md" {...props} />
);

const Float = (props) => (
	// eslint-disable-next-line jsx-a11y/alt-text
	<Image
		className="float-right mb-4 ml-4 rounded-md"
		width="256"
		height="256"
		{...props}
	/>
);

export default function Post({ post }) {
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<article className="prose prose-zinc mx-auto dark:prose-invert md:prose-lg lg:prose-xl">
			<time dateTime={post.date}>{post.formattedDate}</time>
			{post.author && " by " + post.author}
			<h1>
				<Balancer>{post.title}</Balancer>
			</h1>

			<MDXContent components={{ img: CustomImage, Float }} />
		</article>
	);
}

export const getStaticProps = ({ params }) => {
	const post = allPosts.find((post) => post.slug === params.slug);

	return {
		props: {
			post,
			seo: {
				title: post.title,
				description:
					post.description ??
					"The latest announcements & updates from the Peroxaan team.",
				image: post.image ?? "/newsroom.png",
				imageAlt:
					post.imageAlt ??
					"Peroxaan Newsroom logo and name on a white background.",
			},
		},
	};
};

export const getStaticPaths = () => ({
	paths: allPosts.map((post) => post.url),
	fallback: false,
});
