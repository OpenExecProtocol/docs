import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>opentoolcalling.org</span>,
  project: {
    link: 'https://github.com/OpenToolCalling/Specification',
  },
  docsRepositoryBase: 'https://github.com/OpenToolCalling/docs/edit/main',
  head: () => {
    return (
      <>
        <title>Open eXecution Protocol (OXP)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Open eXecution Protocol (OXP) specification"
        />
        <meta name="og:title" content="Open eXecution Protocol (OXP)" />
        <meta
          name="og:description"
          content="The Open eXecution Protocol (OXP) specification"
        />
        <meta name="og:url" content="https://openexecprotocol.org" />
      </>
    );
  },
  footer: {
    text: 'Open eXecution Protocol (OXP)',
  },
};

export default config;
