import { defaultValidator } from "../utils";

describe("Test the working of util functions of useHandleForm", () => {
  it("Should test that defaultValidator works properly", () => {
    const mockInputElement = {
      validity: {
        valueMissing: true,
        tooLong: true,
        tooShort: true,
        patternMismatch: true,
        typeMismatch: true,
        stepMismatch: true,
        rangeOverflow: true,
        rangeUnderflow: true,
        badInput: true
      }
    };

    let error = defaultValidator(mockInputElement);
    expect(error).toEqual("");

    let errorMessages = {
      valueMissing: "Field should not be empty",
      tooLong: "Length of value should be less than 6",
      tooShort: "Length of value should be greater than 3",
      patternMismatch: 'Value should have special charecter "@"',
      typeMismatch: "Value provided is not of type email",
      stepMismatch: "The value should be multiple of type",
      rangeOverflow: "The value should be less than 100",
      rangeUnderflow: "The value should be greater than 50",
      badInput: "Bad input value is detected"
    };

    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.valueMissing);

    mockInputElement.validity.valueMissing = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.tooLong);

    mockInputElement.validity.tooLong = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.tooShort);

    mockInputElement.validity.tooShort = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.patternMismatch);

    mockInputElement.validity.patternMismatch = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.rangeOverflow);

    mockInputElement.validity.rangeOverflow = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.rangeUnderflow);

    mockInputElement.validity.rangeUnderflow = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.stepMismatch);

    mockInputElement.validity.stepMismatch = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.typeMismatch);

    mockInputElement.validity.typeMismatch = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual(errorMessages.badInput);

    mockInputElement.validity.badInput = false;
    error = defaultValidator(mockInputElement, errorMessages);
    expect(error).toEqual("");
  });
});
