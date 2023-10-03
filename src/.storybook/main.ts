import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";


const config: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)", "../stories/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: "@config",
            replacement: path.resolve(__dirname, "../lib/config/"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../lib/components/"),
          },
          {
            find: "@utils",
            replacement: path.resolve(__dirname, "../lib/utils/"),
          },
        ],
      },
    };
  },
};
export default config;
