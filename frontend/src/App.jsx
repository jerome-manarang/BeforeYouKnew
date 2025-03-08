import React, { useState } from "react";
import Home from "./components/Home";
import ProfileForm from "./components/ProfileForm";
import Chat from "./components/Chat";
import Disclaimer from "./components/Disclaimer";

const App = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <Home onStart={() => setStep(1)} />}
      {step === 1 && <Disclaimer onNext={() => setStep(2)} />}
      {step === 2 && <ProfileForm onNext={() => setStep(3)} />}
      {step === 3 && <Chat onEnd={() => setStep(0)} />}
    </>
  );
};

export default App;
