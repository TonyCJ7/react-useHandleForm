import { RefObject } from "react";
import { Keys } from "common/types";
import { FormDispatch } from "../reducer/types";
import { defautValidator } from "../utils";
import { updateFormError } from "../reducer/actions";
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
          errorMessage: defautValidator(inputElement, errorsForField)
        })
      );
    });
  };

export default getFormValidator;
