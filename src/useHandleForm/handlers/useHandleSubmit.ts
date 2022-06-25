import { useEffect } from "react";
import { IndexFromObjectKeys } from "../types";
import { setIsSubmiting } from "../reducer/actions";
import { FormDispatch } from "../reducer/types";

const useHandleSubmit = <FormValues>(
  isSubmitting: boolean,
  errors: IndexFromObjectKeys<FormValues, string>,
  onSubmit: () => void,
  validateFields: () => void,
  dispatch: FormDispatch
) => {
  useEffect(() => {
    const hasError = Object.values(errors).some(Boolean);
    if (isSubmitting && !hasError) {
      onSubmit();
      dispatch(setIsSubmiting(false));
    }
  }, [errors, isSubmitting, onSubmit, dispatch]);

  const handleSubmit = () => {
    dispatch(setIsSubmiting(true));
    validateFields();
  };

  return handleSubmit;
};

export default useHandleSubmit;
