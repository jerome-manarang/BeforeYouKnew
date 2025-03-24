import React from "react";
import './PersonalQuestions.css';

const adjectives = ["Curious", "Shy", "Playful", "Sensitive", "Wild", "Creative"];

const PersonalQuestions = () => {
    return (
      <div className="floating-container">
        <h2 className="floating-title">What words describe you as a child?</h2>
    
        {adjectives.map((word,index) => (
            <div className="floating-bubble" 
            key={index}
            style={{ top: `${20 + index * 10}%` }}
            >
                {word}
            </div>
        ))}
      </div>
    );
  };

export default PersonalQuestions;