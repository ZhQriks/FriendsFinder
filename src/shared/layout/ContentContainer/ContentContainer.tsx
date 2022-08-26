import React from "react";
import { classNames } from "../../functions/functions";

interface IContentContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function ContentContainer(props: IContentContainerProps) {
  return (
    <div
      className={classNames(
        "ContentContainer",
        props.className,
        "max-w-[1240px] mx-auto h-max"
      )}
    >
      {props.children}
    </div>
  );
}

ContentContainer.defaultProps = {
  className: "",
};
