import React from 'react'
import plus from './icons/plus_icon.png';
import {addNewDiceAction}  from  '../store.js';
import { useDispatch} from 'react-redux';

export default function DraftDice() {
  const dispatch=useDispatch();
  function AddDice(){dispatch(addNewDiceAction())};

  return (
    <div className="one-dice__dice-draft-container">
      <div className="one-dice">
        <img className="one-dice__dice-draft" onClick={()=>{AddDice()}} src={plus} alt='+'  />
      </div>
    </div>
  )
}

