import { Footer } from "@components/Footer";
import { Logo } from "@components/Logo";
import { ThemeProvider } from "next-themes";
import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import "../styles/global.css";

export const metadata = {
	title: {
		default: "Open eXecution Protocol (OXP)",
		template: "%s | Open eXecution Protocol (OXP)",
	},
	description: "The Open eXecution Protocol (OXP) specification",
	openGraph: {
		title: "Open eXecution Protocol (OXP)",
		description: "The Open eXecution Protocol (OXP) specification",
		url: "https://openexecprotocol.org",
		site_name: "Open eXecution Protocol (OXP)",
	},
	twitter: {
		card: "summary_large_image",
		site: "openexecprotocol.org",
		url: "https://openexecprotocol.org",
	},
};

const navbar = (
	<Navbar
		projectLink="https://github.com/OpenExecProtocol/Specification"
		logoLink="https://openexecprotocol.org"
		logo={<Logo />}
	/>
);

export default async function RootLayout({ children }) {
	return (
		<html
			lang="en"
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head
				color={{
					hue: { dark: 33, light: 33 },
					saturation: { dark: 85, light: 85 },
					lightness: { dark: 73, light: 73 },
				}}
			>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-DFGXFEC380"
				/>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: This is a valid use case
					dangerouslySetInnerHTML={{
						__html: `
            if (typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              function gtag() { window.dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-DFGXFEC380');
            }
          `,
					}}
				/>
			</Head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Layout
						navbar={navbar}
						pageMap={await getPageMap()}
						docsRepositoryBase="https://github.com/OpenExecProtocol/docs/edit/main"
						editLink="Edit this page on GitHub"
						sidebar={{ defaultMenuCollapseLevel: 1 }}
						footer={<Footer />}
						darkMode={false}
					>
						{children}
					</Layout>
				</ThemeProvider>
			</body>
		</html>
	);
}
