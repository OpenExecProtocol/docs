import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>opentoolcalling.org</span>,
  project: {
    link: 'https://github.com/OpenToolCalling/Specification',
  },
  docsRepositoryBase: 'https://github.com/OpenToolCalling/docs',
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Open Tool Calling" />
        <meta name="og:title" content="Open Tool Calling" />
        <meta
          name="og:description"
          content="The Open Tool Calling specification"
        />
        <meta name="og:url" content="https://opentoolcalling.org" />
      </>
    );
  },
  footer: {
    text: 'Open Tool Calling',
  },
};

export default config;
