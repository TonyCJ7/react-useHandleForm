import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  it("should test whether app renders properly", () => {
    render(<App />);
    expect(screen.getByText("Document yet to be created")).toBeInTheDocument();
  });
});
