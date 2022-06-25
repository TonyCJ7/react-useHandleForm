import React from "react";

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

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type ActionWithoutPayload<T> = {
  type: T;
};

export type Keys<O> = keyof O;

export type IndexFromObjectKeys<O, T> = {
  [key in Keys<O>]?: T;
};
