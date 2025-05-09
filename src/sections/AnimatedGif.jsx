import React from 'react';

const AnimatedGif = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-[80%] md:w-[60%] lg:w-[40%] h-auto object-contain mx-auto" />
    )
}
export default AnimatedGif
