import React from 'react'

import dice1icon from './icons/dice_1_icon.png';
import dice2icon from './icons/dice_2_icon.png';
import dice3icon from './icons/dice_3_icon.png';
import dice4icon from './icons/dice_4_icon.png';
import dice5icon from './icons/dice_5_icon.png';
import dice6icon from './icons/dice_6_icon.png';
import { setVisible, setUnvisible} from '../Animations.js'



export default function DiceValue({value}) {
    let isUserHaveMouse=false; //to provide visiability of dice panel in case user doesnt have mouse, so  onMouseEnter doesnt work
        let diceSide;
    let visiabilityState=false
    function changeVisiability(target){
      if(visiabilityState===false){
          setVisible(target.parentNode);
          visiabilityState=!visiabilityState;}
        else{
          setUnvisible(target.parentNode);
          visiabilityState=!visiabilityState;
        }
    }; 

    switch (value){
      case 1:  diceSide=<img className="one-dice__dice-value" src={dice1icon} alt={value} onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      case 2:  diceSide=<img className="one-dice__dice-value" src={dice2icon} alt={value} onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      case 3:  diceSide=<img className="one-dice__dice-value" src={dice3icon} alt={value}  onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      case 4:  diceSide=<img className="one-dice__dice-value" src={dice4icon} alt={value}  onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      case 5:  diceSide=<img className="one-dice__dice-value" src={dice5icon} alt={value}  onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      case 6:  diceSide=<img className="one-dice__dice-value" src={dice6icon} alt={value}  onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}/>; break;
      default: diceSide=<div className="one-dice__dice-value_text" onMouseEnter={()=>{isUserHaveMouse=true}} onClick={(event)=>{changeVisiability(event.target)}}>{value}</div>;
    };

  return (
    <>{diceSide}</>
  )
}

