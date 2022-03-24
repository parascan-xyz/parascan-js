import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "Info/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Basic = Template.bind({});

export const TableLoader = Template.bind({});
TableLoader.args = {
  text: "Table Loading",
};

export const ChartLoader = Template.bind({});
ChartLoader.args = {
  text: "Chart Loading",
};
