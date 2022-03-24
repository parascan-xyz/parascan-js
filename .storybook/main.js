const path = require("path");

const emotionReactPath = path.dirname(
  require.resolve("@emotion/react/package.json")
);

const emotionStyledPath = path.dirname(
  require.resolve("@emotion/styled/package.json")
);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": emotionReactPath,
          "emotion-theming": emotionReactPath,
          "@emotion/styled": emotionStyledPath,
        },
      },
    };
  },
};
