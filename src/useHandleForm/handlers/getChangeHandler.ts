import { FormDispatch } from "../reducer/types";
import { FieldType, InputChangeHandler } from "../types";
import handleCheckboxChange from "./getCheckboxChangeHandler";

const getChangeHandler =
  (dispatch: FormDispatch, handleGeneralFieldChange: InputChangeHandler) =>
  (type: FieldType) => {
    if (type === "select") {
      //handleSelectChange
    } else if (type === "radio") {
      //handleRadioChange
    } else if (type === "checkbox") {
      return handleCheckboxChange(dispatch);
    } else {
      return handleGeneralFieldChange;
    }
  };

export default getChangeHandler;
