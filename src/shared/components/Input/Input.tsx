import React from "react";
import { classNames } from "../../functions/functions";

import "./Input.css";
interface IInputProps {
  placeholder: string;
  className: string;
  onChange?: (e: any) => void;
  name: string;
  value: any;
  type: string;
  refer?: any;
  errorMessage: string;
}

function Input(props: IInputProps) {
  return (
    <div>
      <input
        ref={props.refer}
        className={classNames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500" +
            " focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder" +
            "-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          props.className
        )}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        type={props.type}
      />
      <span className="text-primary-color text-sm">{props.errorMessage}</span>
    </div>
  );
}

Input.defaultProps = {
  className: "",
  type: "text",
  errorMessage: "",
};

export default Input;
