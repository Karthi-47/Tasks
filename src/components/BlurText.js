import React, { useState } from 'react';
import './BlurText.css';

const BlurText = ({ text = "Hover over me to become sharp!", initiallySharp = false }) => {
    const [isSharp, setIsSharp] = useState(initiallySharp);

    return (
        <div 
            className={`blur-text ${isSharp ? 'sharp' : ''}`}
            onMouseEnter={() => setIsSharp(true)}
            onMouseLeave={() => !initiallySharp && setIsSharp(false)}
        >
            {text}
        </div>
    );
};

export default BlurText;