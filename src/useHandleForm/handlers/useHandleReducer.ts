import { useReducer } from "react";
import { FormState } from "../reducer/types";
import formReducer from "../reducer";
import { ReducerType, ReturnTuple } from "./types";

const initializeState = <FormValues>(
  initialValues: FormValues
): FormState<FormValues> => {
  return {
    isFormValid: false,
    hasError: false,
    isSubmitting: false,
    formValues: initialValues,
    errors: {}
  };
};

const useHandleReducer = <FormValues>(
  initialValue: FormValues
): ReturnTuple<FormValues> => {
  const [formState, dispatch] = useReducer<ReducerType<FormValues>>(
    formReducer,
    initializeState<FormValues>(initialValue)
  );
  return [formState, dispatch];
};

export default useHandleReducer;
