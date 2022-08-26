import * as React from "react";

import "./Layout.css";
import Header from "../Header";

interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="Layout">
      <Header />
      {props.children}
    </div>
  );
}
