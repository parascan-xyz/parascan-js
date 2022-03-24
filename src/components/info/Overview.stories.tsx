import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Overview from "./Overview";
import { overviewData } from "../../utils/data";

export default {
  title: "Info/Overview",
  component: Overview,
  args: {
    data: overviewData,
  },
} as ComponentMeta<typeof Overview>;

const Template: ComponentStory<typeof Overview> = (args) => (
  <Overview {...args} />
);

export const Basic = Template.bind({});
