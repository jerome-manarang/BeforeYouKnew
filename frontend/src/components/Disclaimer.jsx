import React, { useState } from "react";
import './Disclaimer.css';


const Disclaimer = ({ onNext }) => {
    return (
        <div className="disclaimer-container">
            <h1 className="description">Before You Knew will bring you to a conversation with your younger self. As a disclaimer, you may expect things that are not factual to reality. </h1>
            <button onClick={onNext} className="understand-button">
                I understand
            </button>
        </div>
    );
};

export default Disclaimer;