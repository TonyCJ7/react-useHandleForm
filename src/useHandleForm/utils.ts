import { ErrorMessage, ValidityStateKeys } from "./types";

const validityStateKeys: ValidityStateKeys[] = [
  "valueMissing",
  "tooLong",
  "tooShort",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "typeMismatch",
  "badInput"
];

export const defaultValidator = (
  node: HTMLInputElement,
  errors: ErrorMessage
) => {
  const validityState = node.validity;
  if (errors) {
    const errorState = validityStateKeys.find((state) => {
      return validityState[state] && !!errors[state];
    });
    return errorState ? errors[errorState] : "";
  }
  return "";
};
