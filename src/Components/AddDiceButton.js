import React from 'react';
import { useDispatch } from 'react-redux';
import {addNewDiceAction}  from  '../store.js';

export default function AddDiceButton() {
  const dispatch=useDispatch();
  function addDice(){
    dispatch(addNewDiceAction());
  };
  return (
    <button  onClick={(event)=>{addDice();event.stopPropagation()}} className="button-for-panel">Add one dice</button>
  )
}
