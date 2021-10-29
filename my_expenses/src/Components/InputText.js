import { useState } from "react";

function InputText() {
  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.value);
  };
  console.log(name);
  return (
    <div>
      <input type="text" onChange={handleSetName} ></input>
    </div>
  );
}

export default InputText;
