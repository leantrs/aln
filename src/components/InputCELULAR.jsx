import React from "react";
import InputMask from "react-input-mask";
import "./Button.css";

const InputCELULAR = (props) => (
  <InputMask
    className="inputc"
    mask="(99) 99999-9999"
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  ></InputMask>
);

export default InputCELULAR;
