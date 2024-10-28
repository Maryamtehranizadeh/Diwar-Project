import { useState } from "react";
import { checkOTP } from "../../services/auth";
import { setCookie } from "../../utils/cookie";

function CheckOTP({ step, setStep, code, setCode, mobile }) {
  const [error, setError] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log({ code, mobile });
    const { response, error } = await checkOTP(mobile, code);
    if (response) {
      console.log(response.data);
      setCookie(response.data);
      
    }
    if (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
    // console.log({ response, error });
  };
  return (
    <form onSubmit={submitHandler}>
      <p>Validate the code:</p>
      <span>Check the code sent to the mobile {mobile}</span>
      <hr />
      <label htmlFor="input">Enter your code</label>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
        id="input"
        placeholder="Verification Code"
      />
      <button type="submit">Enter</button>
      <p>{error}</p>
      <hr />
      <button onClick={() => setStep(1)}>Change Mobile Number</button>
    </form>
  );
}

export default CheckOTP;
