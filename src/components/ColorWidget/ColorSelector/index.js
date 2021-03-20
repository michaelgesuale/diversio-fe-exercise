import React from 'react';
import './index.css';
import ColorSelectorOption from '../ColorSelectorOption';

const ColorSelector = (props) => {
    const colorSelectorOptions = props.colorList.map(colorCode =>
        <ColorSelectorOption 
            colorCode={colorCode} 
            selectColor={props.selectColor}
            isSelected={props.currentSelectedColor === colorCode}
        />
    )
    return (
        <div className="color-selector-wrapper">
            {colorSelectorOptions}
        </div>
    );
}

export default ColorSelector;
