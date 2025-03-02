import React from "react";
import { motion } from "framer-motion";

const CracksEffect = ({ cracks }) => {

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {Array(cracks).fill(0).map((_,i) => (
                <motion.div
                key={i}
                className="absolute w=1- h-10 bg-white opacity-50"
                initial={{ scale: 0}}
                animate={{ scale: 1}}
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
                />
            ))}
            
        </div>
    
    );


};


export default CracksEffect;