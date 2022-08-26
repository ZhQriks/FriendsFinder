import { render, screen } from "@testing-library/react";
import AppWrapper from "./shared/layout/AppWraper";

test("logo title is exists", () => {
  render(<AppWrapper />);
  let logoTitle = screen.getAllByText("Friends Finder")[0] as HTMLAnchorElement;
  expect(logoTitle).toBeInTheDocument();
});
