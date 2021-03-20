import React from 'react';
import './index.css';

const ColorWindow = (props) => {

    const { selectedColor } = props;

    return (
        <div className="color-window-wrapper">
            <div 
                style={{backgroundColor: selectedColor}} 
                className="color-window-colorbox"
            />
        </div>
    );
}

export default ColorWindow;
