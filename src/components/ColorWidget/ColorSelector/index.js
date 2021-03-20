import React from 'react';
import './index.css';
import ColorSelectorOption from '../ColorSelectorOption';

const ColorSelector = (props) => {

    const { colorList, selectColor, selectedColor } = props;

    const colorSelectorOptions = colorList.map(colorCode =>
        <ColorSelectorOption
            key={colorCode} 
            colorCode={colorCode} 
            selectColor={selectColor}
            isSelected={selectedColor === colorCode}
        />
    )

    return (
        <div className="color-selector-wrapper">
            {colorSelectorOptions}
        </div>
    );
}

export default ColorSelector;
