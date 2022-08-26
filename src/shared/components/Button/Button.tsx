import React from "react";

import "./Button.css";
import { classNames } from "../../functions/functions";

export interface IButtonProps {
  label: string;
  outline: boolean;
  className: string;
  onClick?: () => void;
}
function Button(props: IButtonProps) {
  return (
    <button
      className={classNames(
        props.className,
        "text-white font-bold py-2 px-4 rounded-xl",
        props.outline
          ? "bg-transparent text-[#DA4731] border-2 border-[#F64D35] font-medium"
          : "bg-[#F64D35] hover:bg-[#DA4731]"
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  color: "primary",
  className: "",
};

export default Button;
