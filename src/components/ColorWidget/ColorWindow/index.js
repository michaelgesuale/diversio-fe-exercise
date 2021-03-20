import React from 'react';
import './index.css';

const ColorWindow = (props) => {
    return (
        <div className="color-window-wrapper">
            <div 
                style={{backgroundColor: props.currentSelectedColor}} 
                className="color-window-colorbox"
            />
        </div>
    );
}

export default ColorWindow;
