import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import ColorWindow from './ColorWindow';
import './index.css';

const DEFAULT_COLOR = "grey"

const ColorWidget = (props) => {
    const [currentSelectedColor, setCurrentSelectedColor] = useState(DEFAULT_COLOR);

    const { colorList } = props;

    return (
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>Color Picker Widget</h2>
            </div>
            <ColorWindow currentSelectedColor={currentSelectedColor}/>
            <ColorSelector
                colorList={colorList} 
                currentSelectedColor={currentSelectedColor}
                selectColor={setCurrentSelectedColor}
            />
        </div> 
    );
}

export default ColorWidget;
