import React  from 'react'
import {useSelector} from 'react-redux';
import OneDice from './OneDice.js';
import DraftDice from './DraftDice.js';
import Info from './Info.js';




export default function GameTable() {
  const diceList = useSelector((state)=>state.diceList)
 


  return (
    <>
      <Info/>
      <div className="game-table">
        {diceList.map((dice)=> <OneDice key={dice.id} id={dice.id} value ={dice.value}/>)}
        <DraftDice/>
      </div>
    </>
  )
}


