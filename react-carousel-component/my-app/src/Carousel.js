import { useState } from "react";
import {FaArrowLeft, FaArrowRight, FaCircle } from  'react-icons/fa';
import './Carousel.css';

export default function Container  ({images}) {
  const [activeIndex, setActiveIndex]= useState(0);

  function handlePrevious (id) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
}

  function handleNext (id) {
      setActiveIndex((activeIndex + 1) % images.length);
}

 return (
  <>
  <div className="container">
    <div className='arrow-left'>
      <ArrowLeft onClick={() => {handlePrevious()}}/>
    </div>

    <img src={images[activeIndex].img}></img>

    <div className='arrow-right'>
    <ArrowRight onClick={() => {handleNext()}}/>
    </div>
  </div>

  <div className="container">
    <Indicators count={images.length} activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)}/>
  </div>
  </>
 )
}

function ArrowLeft({onClick}) {
  return <FaArrowLeft onClick={onClick}/>;
}

function ArrowRight({onClick}) {
  return <FaArrowRight onClick={onClick}/>;
}

function CircleIcon({onClick, color}) {
  return <FaCircle className="fa-circle" style={{color: color}}onClick={onClick}/>;
}

function Indicators({count, activeIndex, onSelect}) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CircleIcon
      key={i}
      onClick={() => onSelect(i)}
      color={i === activeIndex ? 'black' : 'white'}/>);
  }
  return <div>{buttons}</div>;
}
