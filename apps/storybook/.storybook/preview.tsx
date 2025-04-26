import type { Preview } from "@storybook/react";

import "./styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // globalTypes: {
  //   darkMode: {
  //     name: "Dark Mode",
  //     description: "Toggle between light and dark mode",
  //     defaultValue: "light",
  //     toolbar: {
  //       icon: "circlehollow",
  //       items: ["light", "dark"],
  //       dynamicTitle: true,
  //     },
  //   },
  // },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-full h-screen bg-default-50 dark:bg-default-900">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  layout: "fullscreen",
};

export default preview;
