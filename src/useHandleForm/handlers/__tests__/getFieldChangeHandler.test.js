import { UPDATE_FORM_VALUE } from "../../reducer/constants";
import getFieldChangeHandler from "../getFieldChangeHandler";

describe("Test the getFieldChangeHandler", () => {
  it("Should test that getFieldChangeHandler works properly", () => {
    const event = {
      target: {
        name: "name",
        value: "Antony"
      }
    };
    const dispatch = jest.fn();

    getFieldChangeHandler(dispatch)(event);

    expect(dispatch).toBeCalledWith({
      type: UPDATE_FORM_VALUE,
      payload: {
        name: "name",
        value: "Antony"
      }
    });
  });
});
