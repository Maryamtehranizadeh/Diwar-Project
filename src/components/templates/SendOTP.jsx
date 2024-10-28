import React from "react";
import { sendOTP } from "../../services/auth";
import { useState } from "react";

function SendOTP({ mobile, step, setMobile, setStep }) {
  const [error, setError] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile.length !== 11) return;
    // console.log(mobile);
    const { response, error } = await sendOTP(mobile);
    if (response) setStep(2);
    if (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
    console.log({ response, error });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Logging in</p>
      <span>
        To use Wall services, enter your phone number, you will receive a
        verification code.
      </span>
      <label htmlFor="input">Enter Your Phone Number</label>
      <hr />
      <input
        id="input"
        type="text"
        placeholder="Your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">Send verification code</button>
      <h4>{error}</h4>
    </form>
  );
}

export default SendOTP;
