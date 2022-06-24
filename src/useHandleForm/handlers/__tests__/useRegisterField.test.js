import { renderHook } from "@testing-library/react";
import { SET_IS_SUBMITTNG } from "../../reducer/constants";
import useHandleSubmit from "../useHandleSubmit";
import useRegisterField from "../useRegisterField";

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
jest.mock("../getChangeHandler", () => {
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

describe("Test the useRegisterField", () => {
  it("Should test that useRegisterField retrun props properly when shouldReturnErrorProp is false", () => {
    let formValues = {
      name: ""
    };
    let errors = {};
    const dispatch = jest.fn();
    const { result } = renderHook(() =>
      useRegisterField(formValues, errors, dispatch)
    );

    const { fieldAttrMap, registerField } = result.current;
    let props = registerField({
      name: "name",
      errorMessages: {
        valueMissing: "Name should not be empty"
      },
      type: "text",
      shouldReturnErrorProp: false
    });
    expect(props).toMatchObject({
      name: "name",
      type: "text",
      ref,
      onChange: onChangeProp,
      value: ""
    });

    expect(fieldAttrMap.current).toMatchObject({
      name: {
        name: "name",
        ref,
        onChange: onChangeProp
      }
    });
  });

  it("Should test that useRegisterField retrun props properly when shouldReturnErrorProp is true", () => {
    let formValues = {
      name: ""
    };
    const errors = {
      name: "Name should not be empty"
    };
    const dispatch = jest.fn();
    const { result } = renderHook(() =>
      useRegisterField(formValues, errors, dispatch)
    );

    const commonOptions = {
      name: "name",
      errorMessages: {
        valueMissing: "Name should not be empty"
      },
      type: "text",
      shouldReturnErrorProp: true
    };

    const commonResult = {
      name: "name",
      type: "text",
      ref,
      onChange: onChangeProp,
      value: ""
    };

    const { registerField } = result.current;
    let props = registerField(commonOptions);
    expect(props).toMatchObject({
      ...commonResult,
      error: errors.name
    });

    props = registerField({ ...commonOptions, errorPropName: "errorMessage" });
    expect(props).toMatchObject({
      ...commonResult,
      errorMessage: errors.name
    });
  });
});
