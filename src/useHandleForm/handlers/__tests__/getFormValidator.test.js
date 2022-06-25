import { UPDATE_FORM_ERROR } from "../../reducer/constants";
import getFormValidator from "../getFormValidator";

describe("Test the getFormValidator", () => {
  it("Should test that getFormValidator works properly", () => {
    const dispatch = jest.fn();

    const inputElem = document.createElement("input");
    inputElem.setAttribute("value", "");
    inputElem.setAttribute("required", "true");

    const fieldAttrMap = {
      current: {
        name: {
          ref: {
            current: inputElem
          },
          errorMessages: {
            valueMissing: "Name should not be empty"
          }
        }
      }
    };

    getFormValidator(fieldAttrMap, dispatch)();

    expect(dispatch).toBeCalledWith({
      type: UPDATE_FORM_ERROR,
      payload: {
        name: "name",
        errorMessage: "Name should not be empty"
      }
    });
  });
});
