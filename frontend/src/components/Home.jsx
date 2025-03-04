import React from "react";


const Home = ({onStart}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-purple text-center">
            <h1 className="text-4xl font-bold text-purple ">Before You Knew</h1>
            <button
                onClick={onStart}
                className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow-lg transition hover:scale-110"
            >
                Begin
            </button>
        </div>
    );
};

export default Home;