import './index.css';

const BORDER_STYLE = "2px solid black"
const ColorSelectorOption = (props) => {

    const {colorCode, isSelected, selectColor} = props;

    return (
        <div 
            style={{
                backgroundColor: colorCode,
                outline: isSelected && BORDER_STYLE
            }}
            className="color-selector-option"
            onClick={() => {selectColor(colorCode)}}
        />
    )
}

export default ColorSelectorOption;