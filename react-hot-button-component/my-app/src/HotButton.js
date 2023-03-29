import { useState } from "react";
import './HotButton.css';

export default function HotButton ({text}) {
  const [clickCount, setClickCount] = useState(0);
  function handleClick () {
    setClickCount(clickCount + 1);
  }

  function defineColor () {
    if (clickCount < 3) return '#82204a'
    if (clickCount < 6) return '#996888'
    if (clickCount < 9) return '#ff4d6d'
    if (clickCount < 12) return '#ff9770'
    if (clickCount < 15) return '#ffea00'
    if (clickCount >= 15) return 'white'
  };
  const definedColor = defineColor();

    return (
      <button onClick={handleClick} className='hot-button' style={{
        backgroundColor: definedColor
      }}>
        {text}
      </button>
    )

}
