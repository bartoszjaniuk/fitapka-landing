import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<main className="container mx-auto">
			<div className="responsive-padding mt-24 lg:mt-28 flex flex-col lg:items-center lg:flex-row gap-8">
				<div className="lg:mt-28 flex flex-col gap-8">
					<div className="w-full lg:max-w-[521px]">
						<h1 className="uppercase  text-7xl">Łączy nas</h1>
						<h1 className="uppercase  text-7xl">
							<span className="text-primary">Pasja</span> do
						</h1>
						<h1 className="uppercase text-7xl">
							<span>Trenowania</span>
						</h1>
					</div>
					<div className="max-w-full lg:max-w-[521px]">
						<p className="text-2xl lg:text-base">
							Nasza aplikacja oferuje bazę trenerów personalnych oraz osób
							poszukujących takiej osoby aż w 17 rodzajach treningu! <br />{" "}
							Dołącz już dziś!
						</p>
					</div>

					<button
						id="pobierz"
						type="button"
						className="text-background bg-primary hover:bg-primaryDarker focus:ring-4 focus:ring-primaryLighter focus:outline-none rounded-lg lg:w-fit  px-7 py-4 font-black text-2xl lg:text-base w-full scroll-m-20"
					>
						Pobierz aplikację
					</button>
				</div>
				<div className="w-full flex justify-center">
					<img
						src="/assets/main-phone1.png"
						className="relative z-10"
						width={256}
						height={554}
					/>
					<motion.img
						animate={{
							opacity: [1, 0.3, 1],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						src="/assets/bg.svg"
						className="absolute bottom-0 left-0  w-full"
					/>
				</div>
			</div>
		</main>
	);
};
