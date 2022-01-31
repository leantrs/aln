import React from "react";
import InputMask from "react-input-mask";
import "./Button.css";

const InputCEP = (props) => (
  <InputMask
    className="inputc"
    mask="99999-999"
    value={props.value}
    onChange={props.onChange}
    placeholder="Cep"
  ></InputMask>
);

export default InputCEP;
