/* TODO:

1. each question should be its own page
2. i want bubbles to appear, and the user can select these bubbles. 
*/


import React, { useState } from "react";
import axios from "axios";
import GeneralQuestions from './GeneralQuestions.jsx';
import PersonalQuestions from './PersonalQuestions.jsx';
import './ProfileForm.css';

const ProfileForm = ({ onNext }) => {
  const [step, setStep] = useState(1); // Track which section is shown
  const [profile, setProfile] = useState({
    parents: "",
    parent_reason: "",
    pets: "",
    home_detail: "",
    education:"",
    passions:"",
    description: "",
    notable_events: "",
    hobbies: "",
    favorite_memory: "",
    fears: "",
    childhood_dream: "",
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/setProfile", profile);
      onNext(); // Move to the chat screen
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  const handleBubbleSelect = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="question"> 
      

      {step === 1 && (
        <>
        <h2>It is time for us to connect to yourself. Please try to provide
        as much detail as possible for you to reach a better signal with them.
      </h2>
        </>
      )}

      {step === 2 && (
        <>
          <PersonalQuestions profile={profile} setProfile={setProfile} />
        </>
      )}

      {step === 3 && (
        <>
          <GeneralQuestions
            profile={profile}
            setProfile={setProfile}
            handleBubbleSelect={handleBubbleSelect}
          ></GeneralQuestions>
        </>
      )}

      <div className="flex mt-4">
        {step > 1 && (
          <button onClick={handleBack} className="px-4 py-2 bg-gray-500 text-white rounded-md mx-2">
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-white text-black rounded-md mx-2"
        >
          {step < 3 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
