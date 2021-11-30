import React from "react";
import InputMask from "react-input-mask";

const InputCEP = (props) => (
  <InputMask
    mask="99999-999"
    value={props.value}
    onChange={props.onChange}
    alwaysShowMask={true}
  />
);

export default InputCEP;
