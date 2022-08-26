import { Story } from "@storybook/react";
import ContentContainer from "./ContentContainer";
import * as React from "react";
export default {
  title: "ContentContainer",
  component: ContentContainer,
};

const Template: Story<any> = (args: any) => (
  <ContentContainer>
    <h2 className="text-2xl text-center font-bold">{args.children}</h2>
  </ContentContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a ContentContainer, used to wrap content in a container",
};
