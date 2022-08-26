import {Story} from "@storybook/react";
import Button from "./Button";
import * as React from "react";
export default {
    title: "Button",
    component: Button,
}

const Template: Story<any> = (args:any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button",
    outline: false,
}

export const Outline = Template.bind({});
Outline.args = {
    label: "Outline Button",
    outline: true,
}