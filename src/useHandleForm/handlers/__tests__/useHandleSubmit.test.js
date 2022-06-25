import { renderHook } from "@testing-library/react";
import { SET_IS_SUBMITTNG } from "../../reducer/constants";
import useHandleSubmit from "../useHandleSubmit";

describe("Test the useHandleSubmit", () => {
  it("Should test that useHandleSubmit work properly", () => {
    const onSubmit = jest.fn();
    const validateField = jest.fn();
    const dispatch = jest.fn();
    let errors = {
      name: "Name should not be empty"
    };
    const { result, rerender } = renderHook(() =>
      useHandleSubmit(true, errors, onSubmit, validateField, dispatch)
    );

    expect(onSubmit).not.toBeCalled();
    expect(dispatch).not.toBeCalled();

    errors = {};
    rerender();
    expect(onSubmit).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: SET_IS_SUBMITTNG,
      payload: false
    });
    result.current();

    expect(validateField).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: SET_IS_SUBMITTNG,
      payload: true
    });
  });
});
