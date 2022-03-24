import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import chakraTheme from "../src/theme/theme";

// resetCSS theme={chakraTheme()}
export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
