import React from "react";
import './GeneralQuestions.css';

const GeneralQuestions = ({ profile, setProfile, handleBubbleSelect }) => {
  return (
    <>
      <div className="question-block">
        <p>How many parents did you have?</p>
        <div className="bubble-group">
          {[
            "Both Parents (Mom and Dad)",
            "Both Parents (Mom and Mom)",
            "Both Parents (Dad and Dad)",
            "Just my mom",
            "Just my dad",
          ].map((option) => (
            <div
              key={option}
              className={`bubble ${profile.parents === option ? "selected" : ""}`}
              onClick={() => handleBubbleSelect("parents", option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      {(profile.parents === "Just my mom" || profile.parents === "Just my dad") && (
        <div className="question-block">
          <p>May I ask what happened to your parent?</p>
          <div className="bubble-group">
            {["Parents divorced", "Parent passed away", "I don't know"].map(
              (option) => (
                <div
                  key={option}
                  className={`bubble ${
                    profile.parent_reason === option ? "selected" : ""
                  }`}
                  onClick={() => handleBubbleSelect("parent_reason", option)}
                >
                  {option}
                </div>
              )
            )}
          </div>
        </div>
      )}


    <div className="question-block">
        <p>What was your home like?</p>
        <div className="bubble-group">
          {[
            "Quiet",
            "Loud",
            "Chaotic",
            "Peaceful",
          ].map((option) => (
            <div
              key={option}
              className={`bubble ${profile.home_detail === option ? "selected" : ""}`}
              onClick={() => handleBubbleSelect("home_detail", option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      
      <div className="question-block">
        <p>How many pets did you have? Describe each one and what animal they were.</p>
        <textarea
          name="pets"
          value={profile.pets}
          onChange={(e) => setProfile({ ...profile, pets: e.target.value })}
          placeholder="Ex: 1 dog named Max, 2 cats named Luna and Leo..."
          className="p-2 rounded-md w-full text-black"
          rows={4}
        />
      </div>

      <div className="question-block">
        <p>Describe your education life. How was it?</p>
        <textarea
          name="education"
          value={profile.education}
          onChange={(e) => setProfile({ ...profile, education: e.target.value })}
          placeholder="Ex: I went to Valley Elementary School. I had a best friend named Jennifer."
          className="p-2 rounded-md w-full text-black"
          rows={4}
        />
      </div>

      <div className="question-block">
        <p>Did you have any passions or any hobbies as a kid?</p>
        <textarea
          name="passions"
          value={profile.passions}
          onChange={(e) => setProfile({ ...profile, passions: e.target.value })}
          placeholder="I loved watching sports, and playing basketball with my friends"
          className="p-2 rounded-md w-full text-black"
          rows={4}
        />
      </div>




    </>
  );
};

export default GeneralQuestions;
