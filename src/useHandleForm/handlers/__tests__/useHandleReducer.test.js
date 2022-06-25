import { renderHook } from "@testing-library/react";
import useHandleReducer from "../useHandleReducer";

const inititalValue = { name: "", age: 10 };
const initialState = {
  formValues: inititalValue,
  errors: {},
  isSubmitting: false
};

describe("Test the useHandleReducer", () => {
  it("Should test that useHandleReducer return properly", () => {
    const { result } = renderHook(() => useHandleReducer(inititalValue));

    const [state] = result.current;

    expect(state).toMatchObject(initialState);
  });
});
