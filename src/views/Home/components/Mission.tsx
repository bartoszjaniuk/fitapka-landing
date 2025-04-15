import * as React from "react";

const DATA = {
	trainer: {
		title: "TRENER",
		photoUrl: "/assets/mission-trainer.png",
		steps: [
			"Zaznacz jaki trening oferujesz oraz okreśł swoją dostępność!",
			"Czas na dokonanie rezerwacji slota przez podopiecznego i kontakt z jego strony!",
			"Sprawdź profil twojego podopiecznego oraz wszystkie informacje i gotowe, masz wszystkie szczegóły waszego spotkania!",
		],
	},
	trainee: {
		title: "TRENUJĄCY",
		photoUrl: "/assets/mission-trainee.png",
		steps: [
			"Zaznacz jaki trening oferujesz oraz okreśł swoją dostępność!",
			"Czekasz tylko na rezerwacje slota przez podopiecznego i czekasz na kontakt!",
			"Sprawdź profil twojego podopiecznego oraz wszystkie informacje.",
		],
	},
};

export const Mission = () => {
	return (
		<main className="container mx-auto pb-8">
			<div className="responsive-padding mt-8 flex flex-col gap-16">
				<div className="flex flex-col gap-4">
					<h1 className="uppercase text-5xl font-bold">Misja</h1>
					<p>
						Celem aplikacji Trinder jest pomoc w poszukiwaniach twojego nowego,
						wymarzonego trenera personalnego lub podopiecznego, którego będziesz
						mógł poprowadzić w czasie jego treningu. Wybierz ścieżkę która cię
						interesuje i zobacz jakie to proste!
					</p>
				</div>
				<Toggler />
			</div>
		</main>
	);
};

const Toggler = () => {
	const [isChecked, setIsChecked] = React.useState(false);
	const user = isChecked ? "trainer" : "trainee";
	const data = DATA[user];
	return (
		<div className="flex gap-4">
			<div className="h-[481px] bg-primary rounded-lg w-full  flex flex-col">
				<div className="flex p-4 ">
					<label className="inline-flex items-center me-5 cursor-pointer">
						<input
							type="checkbox"
							value=""
							checked={isChecked}
							onChange={() => setIsChecked((prev) => !prev)}
							className="sr-only peer"
						/>
						<div className="relative w-11 h-6 bg-transparent border border-background rounded-full peer peer-focus:ring-4 peer-focus:ring-primaryDarker peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-background peer-checked:after:bg-primary after:border-primaryLighter after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-layout "></div>
					</label>
					<h2 className="uppercase text-background text-4xl">{data.title}</h2>
				</div>
				<div className="flex  justify-center items-end h-full">
					<img className="h-[90%] " src={data.photoUrl} />
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
				{data.steps.map((message, i) => (
					<Step message={message} key={i} step={i + 1} />
				))}
			</div>
		</div>
	);
};

const Step = ({ message, step }: { message: string; step: number }) => {
	return (
		<div className="bg-black rounded-lg p-8 flex flex-col gap-3 h-full">
			<h5 className="font-bold text-xl">Krok {step}</h5>
			<p>{message}</p>
		</div>
	);
};
