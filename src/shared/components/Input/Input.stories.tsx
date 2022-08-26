import { Story } from "@storybook/react";
import Input from "./Input";
import * as React from "react";
export default {
  title: "Input",
  component: Input,
};

const Template: Story<any> = (args: any) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Default Input",
  placeholder: "Default Input",
};
