import {useState} from 'react';

export default function ToggleButton ({text, color, size = 100}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState: ', isClicked);
  function handleClick() {
    console.log('before setter: ', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter:', isClicked);
  }

  if (!isClicked) {
    // console.log('not clicked')
    return <button onClick={handleClick} style={{ backgroundColor: '#FFFFFF', width: 70 }}>button not clicked</button>
  }
  return (
    <button onClick={handleClick} style={{
      backgroundColor: color,
      width: size,
    }}>
      {text}
    </button>
  )
}
