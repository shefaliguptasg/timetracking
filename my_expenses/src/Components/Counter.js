import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/Action";
import counter from "../redux/Reducer";

function Counter() {
  //const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector(counter);
  const checkstring = (e) => {
    let s1 = "ABC";
    let s2 = "BAC";
    var s3 = s1.concate(s2);
    let result = false;
    if (s3.includes(s2)) {
      result =  true;
    } else {
      result= false;
    }

    console.log(`....${result}`)
  };
  return (
    <div>
      <input type=""></input>
      <button onSubmit={checkstring}>Submit</button>
    </div>
  );
}

export default Counter;
