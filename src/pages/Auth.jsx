import React from "react";
import { useState } from "react";
import SendOTP from "../components/templates/SendOTP";
import CheckOTP from "../components/templates/CheckOTP";

function Auth() {
  const [step, setStep] = useState(2);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      <p>Auth</p>
      {step === 1 && (
        <SendOTP
          mobile={mobile}
          setStep={setStep}
          step={step}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <CheckOTP
          step={step}
          setStep={setStep}
          code={code}
          mobile={mobile}
          setCode={setCode}
        />
      )}
    </div>
  );
}

export default Auth;