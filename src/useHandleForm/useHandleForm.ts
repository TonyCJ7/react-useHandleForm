import {
  useHandleReducer,
  useHandleSubmit,
  useRegisterField,
  getFormValidator
} from "./handlers";
import Form from "./Form";

type OnSubmit = () => void;

const useHandleForm = <FormValues>(
  initialValue: FormValues,
  onSubmit: OnSubmit
) => {
  const [{ errors, formValues, isSubmitting }, dispatch] =
    useHandleReducer<FormValues>(initialValue);

  const { fieldAttrMap, registerField } = useRegisterField<FormValues>(
    formValues,
    errors,
    dispatch
  );

  const validateFields = getFormValidator<FormValues>(fieldAttrMap, dispatch);

  const handleSubmit = useHandleSubmit<FormValues>(
    isSubmitting,
    errors,
    onSubmit,
    validateFields,
    dispatch
  );

  return {
    registerField,
    errors,
    handleSubmit,
    Form
  };
};

export default useHandleForm;
