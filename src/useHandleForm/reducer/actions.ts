import {
  SET_IS_SUBMITTNG,
  UPDATE_FORM_ERROR,
  UPDATE_FORM_VALUE
} from "./constants";
import {
  SetIsSubmittingAction,
  UpdateFormErrorAction,
  UpdateFormErrorPayload,
  UpdateFormValueAction
} from "./types";

export const updateFormValue = (
  name: string,
  value: string | number | boolean
): UpdateFormValueAction => ({
  type: UPDATE_FORM_VALUE,
  payload: {
    name,
    value
  }
});

export const setIsSubmiting = (
  isSubmitting: boolean
): SetIsSubmittingAction => ({
  type: SET_IS_SUBMITTNG,
  payload: isSubmitting
});

export const updateFormError = (
  payload: UpdateFormErrorPayload
): UpdateFormErrorAction => ({
  type: UPDATE_FORM_ERROR,
  payload
});
