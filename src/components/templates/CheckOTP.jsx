import { useState } from "react";
import { checkOTP } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import styles from "./CheckOTP.module.css";

function CheckOTP({ setStep, code, setCode, mobile }) {
  const { refetch } = useQuery(["profile"], getProfile);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log({ code, mobile });
    if (code.length !== 5) return;
    const { response, error } = await checkOTP(mobile, code);

    if (response) {
      // console.log(response.data);
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>Validate the code:</p>
      <span>Check the code sent to the mobile {mobile}</span>
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
      <button onClick={() => setStep(1)}>Change Mobile Number</button>
    </form>
  );
}

export default CheckOTP;
