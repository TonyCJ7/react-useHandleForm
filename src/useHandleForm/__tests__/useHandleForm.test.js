import { renderHook, act } from "@testing-library/react";
import useHandleForm from "../useHandleForm";

let ref;
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  createRef: () => {
    const newRef = jest.requireActual("react").createRef();
    ref = newRef;
    return newRef;
  }
}));

let onChangeProp;
jest.mock("../handlers/getChangeHandler", () => {
  const getChangeHandler = () => {
    const newHandleChange = () => {
      const onChange = jest.fn();
      onChangeProp = onChange;
      return onChange;
    };
    return newHandleChange;
  };
  return { __esModule: true, default: getChangeHandler };
});

describe("Test the working of useHandleForm", () => {
  it("Should test that useHandleForm returns properly", () => {
    const initialValue = {
      name: ""
    };
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useHandleForm(initialValue, onSubmit));

    let { registerField, errors, handleSubmit, Form } = result.current;

    let props = registerField({
      name: "name",
      type: "text",
      shouldReturnErrorProp: true,
      errorPropName: "errorMessage",
      errorMessages: {
        valueMissing: "Name should not be empty"
      }
    });
    expect(props).toMatchObject({
      name: "name",
      type: "text",
      value: "",
      ref,
      onChange: onChangeProp,
      errorMessage: undefined
    });
    const inputElem = document.createElement("input");
    inputElem.setAttribute("required", true);
    ref.current = inputElem;

    expect(Form).toEqual(Form);
    expect(errors).toEqual({});
    act(() => {
      handleSubmit();
    });
    expect(onSubmit).not.toBeCalled();
    ({ errors, registerField, handleSubmit } = result.current);
    expect(errors).toEqual({ name: "Name should not be empty" });
    props = registerField({
      name: "name",
      type: "text",
      shouldReturnErrorProp: true,
      errorPropName: "errorMessage",
      errorMessages: {
        valueMissing: "Name should not be empty"
      }
    });
    expect(props).toMatchObject({
      name: "name",
      type: "text",
      value: "",
      ref,
      onChange: onChangeProp,
      errorMessage: "Name should not be empty"
    });

    inputElem.setAttribute("value", "new value");
    act(() => {
      handleSubmit();
    });
    ({ errors } = result.current);
    expect(onSubmit).toBeCalled();
    expect(errors).toEqual({
      name: ""
    });
  });
});
