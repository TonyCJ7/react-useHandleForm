import React from "react";
import { IndexFromObjectKeys, Keys } from "common/types";

export type FieldType = "text" | "number" | "radio" | "checkbox" | "select";

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type InputChangeHandler = (e: InputChangeEvent) => void;

export type ValidityStateKeys = Keys<
  Omit<ValidityState, "valid" | "customError">
>;

export type ErrorMessage = IndexFromObjectKeys<
  Omit<ValidityState, "valid" | "customError">,
  string
> & { [key: string]: string };

export type ErrorMessages<FormValues> = IndexFromObjectKeys<
  FormValues,
  ErrorMessage
>;
