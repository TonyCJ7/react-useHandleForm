import { FieldType, InputChangeHandler } from "../types";

const getChangeHandler =
  (handleGeneralFieldChange: InputChangeHandler) => (type: FieldType) => {
    if (type === "select") {
      //handleSelectChange
    } else if (type === "radio") {
      //handleRadioChange
    } else {
      return handleGeneralFieldChange;
    }
  };

export default getChangeHandler;
