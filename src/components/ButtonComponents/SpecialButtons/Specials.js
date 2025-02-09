import React, { useState } from "react";
import SpecialButton from "./SpecialButton";

//import any components needed
import { specials } from '../../../data';
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialState.map((special => {
        return <SpecialButton text={special} />
      }))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials;