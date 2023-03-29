import { useState } from "react";
import './HotButton.css';

export default function HotButton ({text}) {
  const [clickCount, setClickCount] = useState(0);
  console.log('useState: ', clickCount);
  function handleClick () {
    console.log('before setter: ', clickCount);
    setClickCount(clickCount + 1);
    console.log('after setter:', clickCount);
  }

    if (clickCount < 3) {
      return (
        <button onClick={handleClick} className='hot-button cold'>
          {console.log('clickCount: ', clickCount)}
          {text}
        </button>
      )

    }
     if (clickCount < 6) {
      return (
        <button onClick={handleClick} className='hot-button cool'>
          {console.log('clickCount: ', clickCount)}
          {text}
        </button>
      )
    }
      if (clickCount < 9) {
    return (
      <button onClick={handleClick} className='hot-button tepid'>
        {console.log('clickCount: ', clickCount)}
        {text}
      </button>
    )
  }
      if (clickCount < 12) {
    return (
      <button onClick={handleClick} className='hot-button warm'>
        {console.log('clickCount: ', clickCount)}
        {text}
      </button>
    )
  }
      if (clickCount < 15) {
    return (
      <button onClick={handleClick} className='hot-button hot'>
        {console.log('clickCount: ', clickCount)}
        {text}
      </button>
    )
  }
    return (
      <button onClick={handleClick} className='hot-button nuclear'>
        {console.log('clickCount: ', clickCount)}
        {text}
      </button>
    )

}
