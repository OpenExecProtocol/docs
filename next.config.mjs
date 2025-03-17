import { remarkMermaid } from '@theguild/remark-mermaid';
import nextra from 'nextra';

const withNextra = nextra({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
    rehypePrettyCodeOptions: {
      theme: 'everforest-dark',
    },
  },
});

export default withNextra();
