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

export const defautValidator = (
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
