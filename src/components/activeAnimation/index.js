

import React from 'react';
import { string } from 'prop-types'

const ActiveAnimation = (props) => {
    const { backgroundColour } = props;

    return (
        <div className="relative w-32 h-32 mr-10 mb-6">
            <div className={`${backgroundColour} absolute z-0 mt-10 ml-10 bg-transparent block w-16 h-16 rounded-full motion-safe:animate-ping border-2 border-red-500`} />
            <div className={`${backgroundColour} absolute z-0 mt-8 ml-8 bg-transparent block w-20 h-20 rounded-full motion-safe:animate-ping border-2 border-red-500`} />
            <div className={`${backgroundColour} absolute z-0 mt-6 ml-6 bg-transparent block w-24 h-24 rounded-full motion-safe:animate-ping border-2 border-red-500`} />
        </div>
    );
};

ActiveAnimation.defaultProps = {
    backgroundColour: '',
};

ActiveAnimation.propTypes = {
    backgroundColour: string,
};
export default ActiveAnimation;
