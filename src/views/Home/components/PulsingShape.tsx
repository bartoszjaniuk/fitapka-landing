import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const PulsingShape = ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full h-full relative">
			{/* Shape 1 - slow, soft pulse with tiny rotation */}
			<div className="absolute top-[10%] left-1/2 -translate-x-1/2">
				<motion.svg
					className="w-80 h-96 lg:w-[501px] lg:h-[600px]"
					viewBox="0 0 501 600"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{
						scale: [1, 1.02, 0.99, 1.01, 1],
						rotate: [0, 1.5, -1, 0.5, 0],
						translateX: [0, -10, 5, -3, 0],
						translateY: [0, 15, -8, 6, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.3,
					}}
				>
					<path
						d="M20.5441 129.806C84.2464 44.283 163.486 23.0559 259.881 3.7142C322.204 -4.95719 404.563 1.90324 437.049 24.6962C471.913 49.1565 488.624 122.568 485.017 169.022C480.46 227.707 473.869 312.558 399.094 416.676C331.75 510.448 225.652 491.676 146.067 441.519C21.2483 362.853 -32.5939 201.145 20.5441 129.806Z"
						fill="#ADEBB3"
						fill-opacity="0.4"
					/>
				</motion.svg>
			</div>

			<div className="absolute top-0 left-1/2 -translate-x-1/2">
				<motion.svg
					className="w-80 h-96 lg:w-[501px] lg:h-[600px]"
					viewBox="0 0 501 600"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{
						scale: [1, 0.97, 1.01, 0.99, 1],
						rotate: [0, -1, 1.2, -0.5, 0],
						translateX: [0, 8, -6, 4, 0],
						translateY: [0, -10, 7, -5, 0],
					}}
					transition={{
						duration: 11,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.2,
					}}
				>
					<path
						d="M399.553 63.1011C492.746 151.126 511.639 219.227 494.749 344.259C484.552 419.745 452.088 479.068 422.653 505.701C366.197 556.782 262.44 589.821 216.387 596.924C127.116 610.692 38.1896 566.062 16.2981 452.58C-8.68487 323.072 -8.69914 154.763 49.8582 81.0875C120.73 -8.08121 294.895 -35.7539 399.553 63.1011Z"
						fill="#ADEBB3"
						fill-opacity="0.4"
					/>
				</motion.svg>
			</div>

			<div className="absolute top-[10%] left-1/2 -translate-x-1/2">
				<motion.svg
					className="w-80 h-96 lg:w-[501px] lg:h-[600px]"
					viewBox="0 0 501 600"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{
						scale: [1, 1.01, 0.98, 1.03, 1],
						rotate: [0, 0.5, -1.5, 0.8, 0],
						translateX: [0, 5, -7, 3, 0],
						translateY: [0, -12, 6, -4, 0],
					}}
					transition={{
						duration: 9.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2.1,
					}}
				>
					<path
						d="M403.971 66.9284C495.011 156.954 481.109 295.815 459.269 352.014C446.522 383.135 405.867 447.06 373.294 469.626C332.578 497.834 262.842 504.707 217.542 494.062C172.242 483.417 109.641 447.032 41.4145 353.931C-26.8118 260.83 -0.466943 163.183 57.9797 89.6008C128.717 0.544286 290.171 -45.6037 403.971 66.9284Z"
						fill="#ADEBB3"
						fill-opacity="0.4"
					/>
				</motion.svg>
			</div>
			<div className="relative flex justify-center">{children}</div>
		</div>
	);
};
