import React from "react";
import { classNames } from "../../functions/functions";
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";
import { Provider } from "react-redux";
import { setupStore } from "../../../redux/store";

interface IContentContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function AppWraper() {
  const store = setupStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

AppWraper.defaultProps = {
  className: "",
};
