import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Title from "@components/atoms/title/Title";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    title: {control: "string"}
  }
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Main = Template.bind({});

Main.args = {
  title: "Title"
};
