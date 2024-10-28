import React from "react";

function CheckOTP({ step, setStep, code, setCode, mobile }) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log({ code, mobile });
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
      <hr />
      <button onClick={() => setStep(1)}>Change Mobile Number</button>
    </form>
  );
}

export default CheckOTP;
