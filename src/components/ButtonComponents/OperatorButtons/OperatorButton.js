import React from "react";

const OperatorButton = (props) => {
  function updateValue() {
    if (props.symbol !== "=") {
      console.log(props.displayResult);
      return props.setResult(props.displayResult + props.value);
    }
    else {
      console.log(props.displayResult);
      let result = props.displayResult;
      let resultTwo = eval(result);
      console.log("result:" + resultTwo);
      let reString = resultTwo.toString();

      return props.setResult(reString);
    }
  }
  return (
    <button className = "operator-button" onClick = {() =>
    updateValue()}>{props.symbol}</button>
  );
};
export default OperatorButton;