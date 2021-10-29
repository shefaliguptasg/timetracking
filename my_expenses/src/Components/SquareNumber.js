import { useCallback, useMemo, useState } from "react";
import GetTime from "./currentTime";

function SquareConter() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleOnChange = (e) => {
    console.log("handleonchange");
    setNumber(e.target.value);
  };
  const handleCounter = () => {
    console.log("handle of number");
    setCounter(counter + 1);
  };
  const SquareNumer = (number) => {
    console.log("square of number");
    return Math.pow(number, 2);
  };
  const memonises = useCallback(()=>SquareNumer(number),[number])
  const memosieCallback = useCallback(SquareNumer(number),[number]);
  const squreNum = useMemo(() => 
    SquareNumer(number)
  , [number]);
  const time = GetTime();
  console.log(time)
  return (
    <div>
      <input type="text" onChange={handleOnChange}></input>
      <button onClick={handleCounter}>IncrementCounter</button>
      <div>value:{counter}</div>
      <div >Outpur :{squreNum}</div>
      <div >memo :{memosieCallback}</div>
      <div>memonises:{memonises}</div>
      <div>time:{time}</div>
    </div>
  );
}
export default SquareConter;
