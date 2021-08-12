import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginForm } from "@/Components/Organisms/LoginForm";

export default {
  title: "Organisms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
