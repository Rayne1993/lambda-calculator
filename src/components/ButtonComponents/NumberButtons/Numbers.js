import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from "../../../data.js"

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numState] = useState(numbers)
  return (
    <div className="numContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numState.map((num, index) => {
         return <NumberButton number = {num}
         setResult = {props.setResult} displayResult = {props.displayResult}/>
       })}
    </div>
  );
};
export default Numbers;