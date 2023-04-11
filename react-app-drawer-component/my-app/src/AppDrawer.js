import { useState } from "react";
import {FaBars} from 'react-icons/fa';
import './AppDrawer.css';

const menuItems = [
  {id: 0, name: 'About'},
  {id: 1, name: 'Get Started'},
  {id: 2, name: 'Sign In'}
]

 function ItemsList ({itemArray, toggleOff}) {
  const items = itemArray.map(item =>
    <h2 onClick={toggleOff} key={item.number}>{item.name}</h2>
    );

  return items
};


function MenuHeader () {
  return <h1>Menu</h1>
};


export default function AppDrawer({items, header}) {
  const [isClicked, setClicked] = useState(false);
  let handleClick = (event) => {
    setClicked(!isClicked);
    event.stopPropagation()
    console.log(`icon/items have been clicked and isClicked value is : ${isClicked}`, event.target)
  }

  //toggles menu open and closed
  function menuTranslate(){
    if (!isClicked) {
      return  'translateX(-1089px)'
    }
      return 'translateX(0px)'
  };

  function shadeTranslate(){
    if (!isClicked) {
      return  'translateX(2174px)'
    }
      return 'translateX(0px)'
  };

  function shadeOpacity() {
    if (!isClicked) {
      return  '0'
    }
      return '0.5'
  }

  function menuPosition() {
    if (!isClicked) {
      return  ''
    }
      return 'fixed'
  }

  function menuBgColor(){
     if (!isClicked) {
      return  'rgb(255 253 253)'
    }
      return 'rgb(0 0 0 / 40%)'
  }

  function pointerEvent () {
     if (!isClicked) {
      return  'none'
    }
      return 'all'
  }


  let definedMenu = menuTranslate();
  let definedShade = shadeOpacity();
  let definedPosition = menuPosition();
  let definedBgColor = menuBgColor();
  let definedShadedPost = shadeTranslate();
  let definedPointer = pointerEvent();
  return (
    <>
    <FaBars onClick={handleClick} className="ham-icon"/>
    <div className="container" style={{position: menuPosition}}>
    <div className="menu" style={{transform: definedMenu}}>
      <MenuHeader/>
      <ItemsList toggleOff={handleClick} itemArray={menuItems}/>
    </div>
    <div  onClick={handleClick} className="shade" style={{opacity: definedShade, pointerEvents: definedPointer}}></div>
    </div>
    </>
    )
};
