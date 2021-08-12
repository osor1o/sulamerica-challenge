const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = ["node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "..", "src"),
    };

    return config;
  },
};
