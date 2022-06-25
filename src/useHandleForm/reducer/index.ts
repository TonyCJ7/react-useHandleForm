import { FormActionType, FormState } from "./types";
import {
  SET_IS_SUBMITTNG,
  UPDATE_FORM_ERROR,
  UPDATE_FORM_VALUE
} from "./constants";

const formReducer = <FormValues>(
  currentState: FormState<FormValues>,
  action: FormActionType
) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE: {
      const { name, value } = action.payload;
      return {
        ...currentState,
        formValues: { ...currentState.formValues, [name]: value }
      };
    }
    case SET_IS_SUBMITTNG: {
      return {
        ...currentState,
        isSubmitting: action.payload
      };
    }
    case UPDATE_FORM_ERROR: {
      const { name, errorMessage } = action.payload;
      return {
        ...currentState,
        errors: {
          ...currentState.errors,
          [name]: errorMessage
        }
      };
    }
    default:
      return currentState;
  }
};

export default formReducer;
