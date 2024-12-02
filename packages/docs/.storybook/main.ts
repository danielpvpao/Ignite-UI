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
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Ignite-UI/';
      
      // Certifique-se de que os assets sejam servidos corretamente
      config.build.assetsDir = 'assets';  // Ajuste conforme a sua estrutura de diretórios
      
      if (config.build) {
        config.build.rollupOptions = {
          ...config.build.rollupOptions,
          output: {
            ...config.build.rollupOptions?.output,
            publicPath: '/Ignite-UI/',  // Defina o caminho para os assets estáticos
          },
        };
      }
    }
    return config;
  },
};
export default config;
