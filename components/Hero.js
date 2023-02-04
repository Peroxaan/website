import Balancer from "react-wrap-balancer";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Hero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<div className="mx-auto my-20 grid grid-cols-1 md:grid-cols-2">
			<h1 className="text-5xl font-bold leading-[4rem] md:text-6xl">
				<Balancer>
					High-quality{" "}
					<span className="inline-block w-[290px] bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-pink-600 md:w-[360px]">
						{mounted ? (
							<Typewriter
								words={["apps", "services", "experiences"]}
								typeSpeed={100}
								deleteSpeed={100}
								delaySpeed={1000}
								cursor={true}
							/>
						) : (
							<noscript>experiences</noscript>
						)}
					</span>{" "}
					for iOS and macOS.
				</Balancer>
			</h1>
		</div>
	);
}
