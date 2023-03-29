import { useState } from "react";
import './ToggleSwitch.css';


export default function ToggleSwitch () {
  const [isClicked, setIsClicked] = useState(false);


  function handleClick() {
    setIsClicked(!isClicked);
  }
    function definePosition () {
      if (!isClicked) {
        return '0px'
      }
      return '44px'
    };

  function defineBgColor() {
    if (!isClicked) {
      return '#ced4da'
    }
    return '#70e000'
  };

  function defineText() {
    if (!isClicked) {
      return 'OFF'
    }
    return 'ON'
  };


    let definedPosition = definePosition();
    let definedBgColor = defineBgColor();
    let definedText = defineText();



  return (
    <div>
    <div className="switch-container" style={{backgroundColor: definedBgColor}}>
      <div onClick={handleClick} className="switch" style={{left: definedPosition}}>
      </div>
    </div>
    <p>{definedText}</p>
    </div>
  )
}
