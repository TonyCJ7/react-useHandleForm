import getChangeHandler from "../getChangeHandler";

describe("Test the getChangeHandler", () => {
  it("Should test that getChangeHandler return properly", () => {
    const handleFieldChange = jest.fn();

    let result = getChangeHandler(handleFieldChange)("text");
    expect(result).toEqual(handleFieldChange);

    result = getChangeHandler(handleFieldChange)("select");
    expect(result).not.toEqual(handleFieldChange);

    result = getChangeHandler(handleFieldChange)("radio");
    expect(result).not.toEqual(handleFieldChange);
  });
});
