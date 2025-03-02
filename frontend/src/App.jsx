import React, { useState } from "react";
import Home from "./components/Home";
import ProfileForm from "./components/ProfileForm";
import Chat from "./components/Chat";

const App = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <Home onStart={() => setStep(1)} />}
      {step === 1 && <ProfileForm onNext={() => setStep(2)} />}
      {step === 2 && <Chat onEnd={() => setStep(0)} />}
    </>
  );
};

export default App;
