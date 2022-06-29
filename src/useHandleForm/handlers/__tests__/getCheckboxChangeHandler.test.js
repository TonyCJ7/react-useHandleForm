import { updateFormValue } from "../../reducer/actions";
import getCheckboxChangeHandler from "../getCheckboxChangeHandler";

describe("Test the getCheckboxChangeHandler", () => {
  it("Should test that getCheckboxChangeHandler works properly", () => {
    const dispatch = jest.fn();

    const handleCheckboxChange = getCheckboxChangeHandler(dispatch);
    handleCheckboxChange({ target: { name: "tac", checked: true } });

    expect(dispatch).toBeCalledWith(updateFormValue("tac", true));
  });
});
