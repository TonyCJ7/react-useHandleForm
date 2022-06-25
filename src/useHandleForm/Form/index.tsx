import { FormEvent } from "react";
import { FormProps } from "./types";

const Form = ({ children, onSubmit, ...props }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
