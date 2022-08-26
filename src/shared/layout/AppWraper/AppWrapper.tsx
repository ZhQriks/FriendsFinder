import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";
import { Provider } from "react-redux";
import { setupStore } from "../../../redux/store";

export default function AppWrapper() {
  const store = setupStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
