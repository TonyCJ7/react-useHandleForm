import { InputChangeEvent } from "../types";
import { updateFormValue } from "../reducer/actions";
import { FormDispatch } from "../reducer/types";

const handleCheckboxChange =
  (dispatch: FormDispatch) => (e: InputChangeEvent) => {
    dispatch(updateFormValue(e.target.name, e.target.checked));
  };

export default handleCheckboxChange;
