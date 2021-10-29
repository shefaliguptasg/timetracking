const { useState } = require("react");

function Loginpage() {
  const [pwd1, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [error, seteError] = useState("");
  const handlePasswordChange = (e) => {
    if (e.target.value < "") {
      seteError("password should not empty");
    } else if (e.target.value.length > 8) {
      seteError("password length should not greater then 8");
    } else {
        seteError("");
      setPwd(e.target.value);
    }
  };

  const handleConfirmPasswordChange=(e)=>{
    setPwd2(e.target.value)

  }
  const handleSumbit=()=>{
      console.log(pwd1,pwd2)
      if(pwd1!==pwd2)
      {
          seteError("Confirm  Password is not correct ")
      }
      else
      {
          alert("submitted successfully")
      }
  }
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      ></input><br/>
      <label style={{color:"red"}}>{error}</label>
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={handleConfirmPasswordChange}
      ></input>
      <button onSubmit={handleSumbit}>Submit</button>
    </div>
  );
}

export default Loginpage