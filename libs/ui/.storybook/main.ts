import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    // extra
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // https://storybook.js.org/docs/api/main-config-typescript
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    // shouldExtractLiteralValuesFromEnum: false,
    // 👇 Default prop filter, which excludes props from node_modules
    // propFilter: (prop) =>
    //   prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
} satisfies StorybookConfig;

export default config;

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// biome-ignore lint/suspicious/noExplicitAny: off
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
