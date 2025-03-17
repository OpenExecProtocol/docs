const links = {
	Project: [
		{
			url: "https://github.com/OpenExecProtocol",
			title: "GitHub",
			external: true,
		},
	],
	Resources: [
		{
			url: "/",
			title: "Documentation",
			external: false,
		},
		{
			url: "https://github.com/OpenExecProtocol/Specification/releases",
			title: "Releases",
			external: true,
		},
	],
	Feedback: [
		{
			url: "https://openexecprotocol.org/discord",
			title: "Discord",
			external: true,
		},
	],
};

export function Footer() {
	return (
		<footer className="mt-24 border-t border-gray-800/50 bg-black/5 backdrop-blur-[2px]">
			<div className="mx-auto max-w-7xl px-6 py-12">
				<div className="grid grid-cols-3 gap-16">
					{Object.entries(links).map(([title, items]) => (
						<div key={title} className="text-center">
							<h3 className="mb-3 text-sm font-medium text-gray-400">
								{title}
							</h3>
							<ul className="space-y-2.5">
								{items.map((item) => (
									<li key={item.url}>
										<a
											href={item.url}
											target={item.external ? "_blank" : "_self"}
											rel="noreferrer"
											className="text-sm text-gray-500 transition-colors hover:text-gray-300"
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-8 pt-8 border-t border-gray-800/50">
					<p className="text-xs text-gray-500 text-center">
						&copy; {new Date().getFullYear()} OXP Committee. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
