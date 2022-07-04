import { Reducer, RefObject } from "react";
import {
  IndexFromObjectKeys,
  Keys,
  FieldType,
  InputChangeHandler
} from "../types";
import { FormActionType, FormDispatch, FormState } from "../reducer/types";

export type FieldAttributes<FormValues> = {
  name: Keys<FormValues>;
  ref: RefObject<HTMLInputElement>;
  onChange: InputChangeHandler;
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
};

export type ReducerType<FormValues> = Reducer<
  FormState<FormValues>,
  FormActionType
>;

export type ReturnTuple<FormValues> = [FormState<FormValues>, FormDispatch];
