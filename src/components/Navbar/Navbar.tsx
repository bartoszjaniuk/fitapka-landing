export const Navbar = () => {
	return (
		<div className="w-full fixed z-[100]">
			<div className="container responsive-padding mx-auto">
				<nav
					className="
				flex 
				items-center 
		w-fit
	gap-8 
    rounded-lg
    bg-layout
	bg-opacity-90
	
	
	

    "
				>
					<button>
						<img src="/assets/logo-transparent.png" className="w-16" />
					</button>
					<ul className="flex gap-8 pr-4">
						<li>MISJA</li>
						<li>OFERUJEMY</li>
						<li>POBIERZ</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
