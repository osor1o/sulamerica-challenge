import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "@/Components/Molecules/Header";

export default {
  title: "Molecules/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
  user: {
    _id: "123",
    email: "homestead@homestead.com",
    name: "Joaquim Silva",
  },
};
