import { RefObject } from "react";
import { FormDispatch } from "../reducer/types";
import { defaultValidator } from "../utils";
import { updateFormError } from "../reducer/actions";
import { Keys } from "../types";
import { FieldAttributesMap } from "./types";

const getFormValidator =
  <FormValues>(
    fieldAttrMap: RefObject<FieldAttributesMap<FormValues>>,
    dispatch: FormDispatch
  ) =>
  () => {
    Object.keys(fieldAttrMap.current).forEach((key) => {
      const attributes = fieldAttrMap.current[key as Keys<FormValues>];
      const errorsForField = attributes.errorMessages;
      const inputElement = attributes.ref.current;
      dispatch(
        updateFormError({
          name: key,
          errorMessage: defaultValidator(inputElement, errorsForField)
        })
      );
    });
  };

export default getFormValidator;
