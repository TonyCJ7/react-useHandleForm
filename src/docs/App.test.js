import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  it("test app", () => {
    render(<App />);
    expect(screen.getByText("Sample Text")).toBeInTheDocument();
  });
});
