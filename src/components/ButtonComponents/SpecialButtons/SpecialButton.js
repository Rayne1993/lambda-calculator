import React from "react";

const SpecialButton = (props) => {
  function updateValue() {
    if (props.symbol === "C") 
    return props.setResult(0)

    if (props.symbol === "+/-" && props.displayResult[0] !== "-")
    return props.setResult("-" + props.displayResult)

    if (props.symbol === "+/-" && props.displayResult[0] === "-")
    return props.setResult(props.displayResult.slice(1, props.displayResult.length))

    if (props.symbol === "%" && props.displayResult){
      console.log(props.displayResult);
      return props.setResult(props.displayResult/100);
    }
  }
  return (
    <button className = "special-button" onClick = {() =>
    updateValue()}>{props.symbol}</button>
  );
};
export default SpecialButton;