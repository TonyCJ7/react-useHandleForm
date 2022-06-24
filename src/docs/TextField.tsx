/* eslint-disable react/display-name */
import { forwardRef } from "react";

const TextField = forwardRef(({ label, errorMessage, ...props }: any, ref) => {
  return (
    <div>
      <p>{label}</p>
      <input {...props} ref={ref} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
});

export default TextField;
