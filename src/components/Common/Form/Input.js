import React from "react";

const Input = props => {
  return (
    <div className="form-element">
      <label>
        <div className={"form-label " + props.labelClassName}>
          {props.label}
        </div>
        <div>
          <input
            type={props.type}
            value={props.value}
            onChange={e => props.onChange(e)}
            className={"form-input " + props.inputClassNames}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
