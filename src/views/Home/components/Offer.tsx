import { PulsingShape } from "./PulsingShape";

const DATA = {
	title: "OFERUJEMY",
	imageUrl: "/assets/offer.png",
	description:
		"Nasza aplikacja oferuje ci dostęp do bazy trenerów personalnych oraz podopiecznych. Trenuj na swoich zasadach już dziś, a wszystko to kompletnie za darmo!",
	steps: [
		{
			title: "Siła w planowaniu!",
			description:
				"Skorzystaj z dashbordu który będzie dla ciebie twoim centrum dowodzenia i z którego przejdziesz do szczegółów treningu.",
			icon: "/assets/svgs/calendar.svg",
		},
		{
			title: "Proste wyszukiwanie trenerów",
			description:
				"Dzięki intuicyjym filtrom odnajdziesz trenera który spełni twoje oczeniwania treningowe.",
			icon: "/assets/svgs/search.svg",
		},
		{
			title: "Zapisuj swój progres na bieżąco",
			description:
				"W naszej aplikacji możesz zapisywać obwody swoich mięśni i na bieżaco je aktualizować dla twojego trenera!",
			icon: "/assets/svgs/meassure.svg",
		},
	],
};

export const Offer = () => {
	return (
		<section className="bg-background py-8 scroll-m-20" id="oferta">
			<div className="container mx-auto">
				<div className="responsive-padding flex flex-col h-full items-center lg:flex-row gap-8">
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-4">
							<h1 className="uppercase text-5xl font-bold">{DATA.title}</h1>
							<p className="text-2xl lg:text-base font-normal">
								{DATA.description}
							</p>
						</div>

						<ul className="flex flex-col gap-5">
							{DATA.steps.map((step, i) => (
								<li
									className="border border-primary p-5 rounded-lg even:bg-primary even:text-background flex items-start gap-2 w-full selection:even:bg-white"
									key={step.title}
								>
									<img className="min-w-10 lg:min-w-8" src={step.icon} />

									<div className="flex flex-col gap-2">
										<h5 className="text-2xl lg:text-xl font-bold">
											{step.title}
										</h5>
										<p className="text-lg lg:text-base font-medium">
											{step.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>

					<PulsingShape>
						<img src={DATA.imageUrl} />
					</PulsingShape>
				</div>
			</div>
		</section>
	);
};
