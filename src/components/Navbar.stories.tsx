import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "./Navbar";

//const logo = ''

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Blocks",
    href: "#",
  },
  {
    label: "Extrinsics",
    href: "#",
  },
  {
    label: "Events",
    href: "#",
  },
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
];

export default {
  title: "Main/Navbar",
  component: Navbar,
  args: { NAV_ITEMS: NAV_ITEMS },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
