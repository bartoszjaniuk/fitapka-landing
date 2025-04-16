import * as React from "react";
import { motion, type Variants } from "framer-motion";

export const MENU_LINKS = [
	{
		title: "MISJA",
		path: "/#misja",
	},
	{
		title: "OFERUJEMY",
		path: "/#oferta",
	},
	{
		title: "POBIERZ",
		path: "#pobierz",
	},
];

const ResponsiveLinksWithHamburger = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggleButton = () => setIsOpen((prev) => !prev);
	React.useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isOpen]);

	const variants: Variants = {
		hidden: {
			x: "300%",

			height: 0,
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
		},
		visible: {
			transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
			x: 0,
			height: "100vh",
		},
	};
	return (
		<nav
			className="lg:hidden bg-layout 
	  w-full py-2"
		>
			<div className="flex container mx-auto items-center  responsive-padding">
				<div className="flex items-center w-full justify-between">
					<button
						className="flex w-10 h-[30px] lg:hidden flex-col items-end justify-between bg-transparent p-1 cursor-pointer z-50"
						onClick={toggleButton}
					>
						<span className={`${isOpen ? "opened" : ""} line`} />
						<span className={`${isOpen ? "opened" : ""} line`} />
						<span className={`${isOpen ? "opened" : ""} line`} />
					</button>

					<button onClick={() => window.location.replace("/")}>
						<img src="/assets/logo-transparent.png" className="w-16" />
					</button>
				</div>
			</div>
			<motion.div
				initial="hidden"
				animate={isOpen ? "visible" : "hidden"}
				variants={variants}
				className="text-2xl absolute top-[64px] w-full bg-layout 
	 left-0 lg:hidden py-8  flex flex-col gap-10 overflow-y-scroll items-center my-auto"
			>
				{MENU_LINKS.map((link, index) => {
					return (
						<a
							className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
							key={index}
							href={link.path}
						>
							{link.title}
						</a>
					);
				})}
			</motion.div>
		</nav>
	);
};

export const Navbar = () => {
	return (
		<div className="w-full fixed top-0 z-[100]">
			<div className="hidden lg:block lg:container lg:responsive-padding lg:mt-4 mx-auto">
				<nav
					className="
				hidden lg:flex 
				items-center 
		w-fit
	gap-8 
    rounded-lg
    bg-layout
	bg-opacity-90
    "
				>
					<button onClick={() => window.location.replace("/")}>
						<img src="/assets/logo-transparent.png" className="w-16" />
					</button>
					<ul className="flex gap-8 pr-4">
						{MENU_LINKS.map((link, index) => (
							<a
								className="relative text-xl md:text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap"
								key={index}
								href={link.path}
							>
								{link.title}
							</a>
						))}
					</ul>
				</nav>
			</div>
			<ResponsiveLinksWithHamburger />
		</div>
	);
};
