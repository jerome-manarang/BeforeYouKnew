import React, { useState } from "react";
import axios from "axios";


const ProfileForm = ({ onNext }) => {
    const [profile, setProfile] = useState({
        description: "",
        notable_events: "",
        hobbies: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhose:500/setProfile", profile);
        onNext();
    };

    return (
        <div className="flex flex-col items-center jusitfy-center h-screen bg-black text-white">
            <h2 className="text-2xl mb-4">Describe Your Younger Self</h2>
            <input
                type="text"
                placeholder="How were you as a kid?"
                value={profile.descirption}
                onChange={(e)=> setProfile({...profile, description: e.target.value})}
                className="p-2 text-black rounded-md w-64 mb-3"
               />
            <input
                type="text"
                placeholder="Notable childhood event?"
                value={profile.notable_events}
                onChange={(e) => setProfile({ ...profile, notable_events: e.target.value })}
                className="p-2 text-black rounded-md w-64 mb-3"
            />
            <input
                type="text"
                placeholder="What hobbies did you love?"
                value={profile.hobbies}
                onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                className="p-2 text-black rounded-md w-64 mb-3"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-white text-black rounded-full"
            >
                Continue
            </button>

        </div>
    );
};

export default ProfileForm;