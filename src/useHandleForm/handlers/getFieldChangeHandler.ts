import { updateFormValue } from "../reducer/actions";
import { FormDispatch } from "../reducer/types";
import { InputChangeEvent } from "../types";

const getFieldChangeHandler =
  (dispatch: FormDispatch) => (e: InputChangeEvent) => {
    dispatch(updateFormValue(e.target.name, e.target.value));
  };

export default getFieldChangeHandler;
