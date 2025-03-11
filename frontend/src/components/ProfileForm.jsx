import React, { useState } from "react";
import axios from "axios";
import './ProfileForm.css';

const ProfileForm = ({ onNext }) => {
  const [step, setStep] = useState(1); // Track which section is shown
  const [profile, setProfile] = useState({
    description: "",
    notable_events: "",
    hobbies: "",
    favorite_memory: "",
    fears: "",
    childhood_dream: "",
  });

  const handleNext = () => {
    if (step < 3) {
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

  return (
    <div> 
      <h2 className="question">Tell me about your younger self</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            name="description"
            placeholder="How were you as a kid?"
            value={profile.description}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
          <input
            type="text"
            name="notable_events"
            placeholder="Notable childhood event?"
            value={profile.notable_events}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
          <input
            type="text"
            name="hobbies"
            placeholder="What hobbies did you love?"
            value={profile.hobbies}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            name="favorite_memory"
            placeholder="What’s your favorite childhood memory?"
            value={profile.favorite_memory}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
          <input
            type="text"
            name="fears"
            placeholder="What were you afraid of?"
            value={profile.fears}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
        </>
      )}

      {step === 3 && (
        <>
          <input
            type="text"
            name="childhood_dream"
            placeholder="What did you want to be when you grew up?"
            value={profile.childhood_dream}
            onChange={handleChange}
            className="p-2 text-black rounded-md w-64 mb-3"
          />
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
