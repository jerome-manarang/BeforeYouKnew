import React from "react";
import './Home.css';
const Home = ({ onStart }) => {
    return (
        <div className="home-container">
            <h1 className="title">Before You Knew</h1>
            <button onClick={onStart} className="start-button">
                Begin
            </button>
        </div>
    );
};

// Tailwind (refer to later)
// const Home = ({onStart}) => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-yellow text-purple text-center">
//             <h1 className="title">Before You Knew</h1>
//             <button
//                 onClick={onStart}
//                 className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow-lg transition hover:scale-110"
//             >
//                 Begin
//             </button>
//         </div>
//     );
// };

export default Home;