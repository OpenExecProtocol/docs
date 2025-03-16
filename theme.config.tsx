import { Logo } from '@components/Logo';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <Logo />,
  logoLink: 'https://openexecprotocol.org',
  project: {
    link: 'https://github.com/OpenExecProtocol/Specification',
  },
  docsRepositoryBase: 'https://github.com/OpenExecProtocol/docs/edit/main',
  themeSwitch: {
    component: () => null,
  },
  head: () => {
    return (
      <>
        <title>Open eXecution Protocol (OXP)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Open eXecution Protocol (OXP) specification"
        />
        <meta property="og:title" content="Open eXecution Protocol (OXP)" />
        <meta
          property="og:description"
          content="The Open eXecution Protocol (OXP) specification"
        />
        <meta property="og:url" content="https://openexecprotocol.org" />
        <meta property="og:site_name" content="Open eXecution Protocol (OXP)" />

        <meta
          name="apple-mobile-web-app-title"
          content="Open eXecution Protocol (OXP)"
        />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="openexecprotocol.org" />
        <meta name="twitter:url" content="https://openexecprotocol.org" />

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
      </>
    );
  },
  footer: {
    text: 'Open eXecution Protocol (OXP)',
  },
};

export default config;
