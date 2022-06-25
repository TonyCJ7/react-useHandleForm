import { Reducer, RefObject } from "react";
import {
  IndexFromObjectKeys,
  Keys,
  ErrorMessage,
  FieldType,
  InputChangeHandler
} from "../types";
import { FormActionType, FormDispatch, FormState } from "../reducer/types";

export type FieldAttributes<FormValues> = {
  name: Keys<FormValues>;
  ref: RefObject<HTMLInputElement>;
  onChange: InputChangeHandler;
  errorMessages?: ErrorMessage;
};

export type FieldAttributesMap<FormValues> = IndexFromObjectKeys<
  FormValues,
  FieldAttributes<FormValues>
>;

export type RegisterFieldOptions<FormValues> = {
  name: Keys<FormValues>;
  type: FieldType;
  shouldReturnErrorProp?: boolean;
  errorPropName?: string;
  errorMessages?: ErrorMessage;
};

export type ReducerType<FormValues> = Reducer<
  FormState<FormValues>,
  FormActionType
>;

export type ReturnTuple<FormValues> = [FormState<FormValues>, FormDispatch];
