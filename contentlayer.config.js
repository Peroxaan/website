import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeImgSize from "rehype-img-size";
import smartypants from "remark-smartypants";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `newsroom/*.{mdx,md}`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
			required: true,
		},
		author: {
			type: "string",
			required: false,
			default: "Michael Burkhardt",
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (post) => post._raw.flattenedPath.split("/").at(-1),
		},
		url: {
			type: "string",
			resolve: (post) =>
				"/newsroom/" + post._raw.flattenedPath.split("/").at(-1),
		},
		formattedDate: {
			type: "string",
			resolve: ({ date }) =>
				Intl.DateTimeFormat({}, { dateStyle: "long" }).format(
					new Date(date)
				),
		},
	},
}));

export const App = defineDocumentType(() => ({
	name: "App",
	filePathPattern: `apps/*.md`,
	fields: {
		name: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		color: {
			type: "string",
			required: true,
		},
		appStore: {
			type: "string",
			required: true,
		},
		priority: {
			type: "number",
			required: false,
		}
	},
}));

const settings = {
	rehypePlugins: [[rehypeImgSize, { dir: `${process.cwd()}/public` }]],
	remarkPlugins: [[smartypants, { dashes: true }]],
};

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post, App],
	markdown: settings,
	mdx: settings,
});
