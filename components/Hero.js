import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
	const [mounted, setMounted] = useState(false);
	const [width, setWidth] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		setMounted(true);
		if (ref.current?.offsetWidth) setWidth(ref.current.offsetWidth);

		function handleResize() {
			if (ref.current?.offsetWidth) setWidth(ref.current.offsetWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setWidth]);

	return (
		<div className="mx-auto mb-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
			<h1 className="my-auto max-w-lg text-5xl font-bold md:text-6xl">
				High-quality{" "}
				<span
					className="invisible bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-pink-600"
					ref={ref}
				>
					experiences
				</span>
				<noscript>
					<style>
						{`.invisible { visibility: visible !important; }`}
					</style>
				</noscript>
				<span
					className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-pink-600"
					style={{
						width,
						marginLeft: width * -1,
						display: mounted ? "inline-block" : "none",
					}}
				>
					{mounted && (
						<Typewriter
							words={["apps", "services", "experiences"]}
							typeSpeed={100}
							deleteSpeed={100}
							delaySpeed={1000}
							cursor={true}
						/>
					)}
				</span>{" "}
				for iOS, macOS, and Windows.
			</h1>

			<div className="relative mx-auto h-72 w-full lg:h-96">
				<Image
					fill
					alt="Apple devices showing Peroxaan apps running on them."
					src="/Hero.png"
					className="object-contain"
					sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
					priority
				/>
			</div>
		</div>
	);
}
