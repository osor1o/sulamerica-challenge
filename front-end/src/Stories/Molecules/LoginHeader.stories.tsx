import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginHeader } from "@/Components/Molecules/LoginHeader";

export default {
  title: "Molecules/LoginHeader",
  component: LoginHeader,
} as ComponentMeta<typeof LoginHeader>;

const Template: ComponentStory<typeof LoginHeader> = (args) => (
  <LoginHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
