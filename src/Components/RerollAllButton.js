import React from 'react'
import { useDispatch } from 'react-redux';
import {rerollAnimation} from '../Animations.js'

export default function RerollAllButton() {
  const dispatch=useDispatch();
  function rerollAll(){
    let allDiceList=document.getElementsByClassName('one-dice__reroll-one');
    for (var i = 0; i < allDiceList.length; i++){
        rerollAnimation(allDiceList[i])}
    dispatch({type: "Reroll all"});
  };

  return (
    <button  onClick={()=>rerollAll()} className="button-for-panel">Reroll all the dice</button>
  )
}
