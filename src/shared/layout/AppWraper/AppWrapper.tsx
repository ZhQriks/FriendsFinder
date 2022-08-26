import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";
import { Provider } from "react-redux";
import { setupStore } from "../../../redux/store";

export default function AppWrapper() {
  const store = setupStore();
  return (
    <Provider store={store}>
      {" "}
      {/* Setup provider to be able to use redux in all components */}
      <BrowserRouter>
        {" "}
        {/*Connecting react-router-dom-v6*/}
        <App />
      </BrowserRouter>
    </Provider>
  );
}
