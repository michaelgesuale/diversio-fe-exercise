import './index.css';

const BORDER_STYLE = "2px solid black"
const ColorSelectorOption = (props) => {
    return (
        <div 
            style={
                {
                    backgroundColor: props.colorCode,
                    outline: props.isSelected && BORDER_STYLE
                }
            } 
            className="color-selector-option"
            onClick={() => {props.selectColor(props.colorCode)}}
        />
    )
}

export default ColorSelectorOption;