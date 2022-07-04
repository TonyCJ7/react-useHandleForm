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

  const handleChange = getChangeHandler(dispatch, handleFieldChange);

  const registerField = (options: RegisterFieldOptions<FormValues>) => {
    const {
      name,
      type,
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

    const { ref, onChange } = fieldAttrMap.current[name];

    const valueKey = type === "checkbox" ? "checked" : "value";

    const commonProps = {
      name,
      type,
      ref,
      [valueKey]: formValues[name],
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
