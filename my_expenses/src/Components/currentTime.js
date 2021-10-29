import { useMemo, useState } from "react";

function GetTime() {
  const [time, settime] = useState(0);
  const getCurrentTime = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var data = "Success";
        data === "Success" ? resolve(new Date()) : reject("Error Occured");
      }, 2000);
    });
  };

  getCurrentTime()
    .then((currentTime) => getCurrentTime())
    .then((currentTime) => {
      console.log(`The currentTime is:${currentTime}`);
    })
    .catch((err) => console.log("there was an erroe:${err}"));
    return time
}

export default GetTime;
