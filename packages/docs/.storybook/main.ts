import type { StorybookConfig } from "@storybook/react-vite";


const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  "core":{
    "builder": '@storybook/builder-vite'
  },
  viteFinal: (config, {configType}) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Ignite-UI/'
    }
    return config
  }
};
export default config;
