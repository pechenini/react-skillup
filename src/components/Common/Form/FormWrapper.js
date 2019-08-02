import React from "react";
import "../../../css/Form.css";
function FormWrapper({
  children,
  className,
  onSubmit,
  action,
  method = "POST"
}) {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      method={method}
      className={className + " form-wrapper"}
    >
      {children}
    </form>
  );
}

export default FormWrapper;
