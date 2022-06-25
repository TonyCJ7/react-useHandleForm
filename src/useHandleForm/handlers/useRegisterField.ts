import { createRef, useRef } from "react";
import { IndexFromObjectKeys } from "../types";
import { FormDispatch } from "../reducer/types";
import { FieldAttributesMap, RegisterFieldOptions } from "./types";
import getFieldChangeHandler from "./getFieldChangeHandler";
import getChangeHandler from "./getChangeHandler";

const useRegisterField = <FormValues>(
  formValues: FormValues,
  errors: IndexFromObjectKeys<FormValues, string>,
  dispatch: FormDispatch
) => {
  const fieldAttrMap = useRef<FieldAttributesMap<FormValues>>({});

  const handleFieldChange = getFieldChangeHandler(dispatch);

  const handleChange = getChangeHandler(handleFieldChange);

  const registerField = (options: RegisterFieldOptions<FormValues>) => {
    const {
      name,
      type,
      errorMessages,
      errorPropName = "error",
      shouldReturnErrorProp = false
    } = options;

    if (!fieldAttrMap.current[name]) {
      fieldAttrMap.current[name] = {
        name,
        ref: createRef(),
        onChange: handleChange(type)
      };
    }
    fieldAttrMap.current[name].errorMessages = errorMessages;

    const { ref, onChange } = fieldAttrMap.current[name];

    const commonProps = {
      name,
      type,
      ref,
      value: formValues[name],
      onChange
    };

    return Object.assign(
      {},
      commonProps,
      shouldReturnErrorProp && { [errorPropName]: errors[name] }
    );
  };

  return { fieldAttrMap, registerField };
};

export default useRegisterField;
