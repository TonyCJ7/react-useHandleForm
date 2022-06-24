import { fireEvent, render, screen } from "@testing-library/react";
import Form from "..";

describe("Test the working of Form component", () => {
  it("Should test that the form component is rendered successfully", () => {
    const handleSubmit = jest.fn();
    const { rerender } = render(
      <Form data-testid="form-element">
        <input data-testid="input-element" />
      </Form>
    );
    const formElement = screen.getByTestId("form-element");
    expect(screen.getByTestId("form-element")).toBeInTheDocument();
    expect(screen.getByTestId("input-element")).toBeInTheDocument();
    fireEvent.submit(formElement);
    expect(handleSubmit).not.toBeCalled();

    rerender(
      <Form data-testid="form-element" onSubmit={handleSubmit}>
        <input data-testid="input-element" />
      </Form>
    );
    fireEvent.submit(formElement);
    expect(handleSubmit).toBeCalled();
  });
});
