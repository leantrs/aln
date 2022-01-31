import React from "react";
import InputMask from "react-input-mask";
import "./Button.css";

const InputCPF = (props) => (
  <InputMask
    className="inputc"
    mask="999999999-99"
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  ></InputMask>
);

export default InputCPF;
