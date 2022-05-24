import React from 'react'
import DiceSettings from './DiceSettings.js';
import DiceDelete from './DiceDelete.js';
import DiceValue from './DiceValue.js';
import {rerollAnimation, setVisible, setUnvisible} from '../Animations.js'
import { useDispatch} from 'react-redux';

export default function OneDice({id, value}) {

const dispatch=useDispatch();

function rerollOne(event){
  rerollAnimation(event.target)
  dispatch({type: "Reroll one", payload: {id: id}});
};


  return (
    <div className="one-dice__container">
      <div className="one-dice">
        <div className='one-dice__dice-panel'  onMouseEnter={(event)=>{setVisible(event.target)}} onMouseLeave={(event)=>{setUnvisible(event.target)}} > 
          <DiceSettings id={id}/>
          <DiceDelete id={id}/>
          <DiceValue value={value}/>
          <button onClick={(event)=>{rerollOne(event)}} className="one-dice__reroll-one">Reroll this</button>
        </div>
        
      </div>
      </div>
  )
}
