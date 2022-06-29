import { Dispatch } from "react";
import { ActionWithPayload, IndexFromObjectKeys } from "../types";
import {
  SET_IS_SUBMITTNG,
  UPDATE_FORM_ERROR,
  UPDATE_FORM_VALUE
} from "./constants";

export type FormState<FormValues> = {
  isFormValid: boolean;
  hasError: boolean;
  isSubmitting: boolean;
  formValues: FormValues;
  errors: IndexFromObjectKeys<FormValues, string>;
};

export type UpdateFormValuePayload = {
  name: string;
  value: string | number | boolean;
};

export type UpdateFormValueAction = ActionWithPayload<
  typeof UPDATE_FORM_VALUE,
  UpdateFormValuePayload
>;

export type SetIsSubmittingAction = ActionWithPayload<
  typeof SET_IS_SUBMITTNG,
  boolean
>;

export type UpdateFormErrorPayload = {
  name: string;
  errorMessage: string;
};

export type UpdateFormErrorAction = ActionWithPayload<
  typeof UPDATE_FORM_ERROR,
  UpdateFormErrorPayload
>;

export type FormActionType =
  | UpdateFormValueAction
  | SetIsSubmittingAction
  | UpdateFormErrorAction;

export type FormDispatch = Dispatch<FormActionType>;
