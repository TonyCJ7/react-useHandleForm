import { renderHook } from "@testing-library/react";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import formReducer from "..";
import { setIsSubmiting, updateFormError, updateFormValue } from "../actions";

const initialState = {
  formValues: { name: "", age: 10 },
  errors: {},
  isSubmitting: false
};

let result;
let rerender;
let state;
let dispatch;

describe("Test the working of reducer", () => {
  beforeEach(() => {
    const data = renderHook(() => useReducer(formReducer, initialState));
    result = data.result;
    rerender = data.rerender;
    [state, dispatch] = data.result.current;
  });

  it("Should initialize reducer with proper value", () => {
    expect(state).toMatchObject(initialState);
  });

  it("Should test that the updateFormValues action works properly", () => {
    expect(state.formValues.name).toEqual("");
    act(() => {
      dispatch(updateFormValue("name", "Antony"));
    });
    rerender();
    [state] = result.current;
    expect(state.formValues.name).toEqual("Antony");
  });

  it("Should test that the updateFormError action works properly", () => {
    expect(state.errors.name).toEqual(undefined);
    act(() => {
      dispatch(
        updateFormError({
          name: "name",
          errorMessage: "Name should not be empty"
        })
      );
    });
    rerender();
    [state] = result.current;
    expect(state.errors.name).toEqual("Name should not be empty");
  });

  it("Should test that the SetIsSubmitting action works properly", () => {
    expect(state.isSubmitting).toEqual(false);
    act(() => {
      dispatch(setIsSubmiting(true));
    });
    rerender();
    [state] = result.current;
    expect(state.isSubmitting).toEqual(true);
  });

  it("Should test that the default case is executed when wrong action is dispatched", () => {
    expect(state).toMatchObject(initialState);
    act(() => {
      dispatch({ type: "WRONG_ACTION", payload: { formValues: {} } });
    });
    rerender();
    [state] = result.current;
    expect(state.formValues).not.toEqual({});
    expect(state).toEqual(initialState);
  });
});
