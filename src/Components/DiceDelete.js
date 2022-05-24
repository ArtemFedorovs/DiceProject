import React from 'react'
import {useDispatch} from 'react-redux';

export default function DiceDelete({id}) {
 const dispatch=useDispatch();  
  function deletedice(id){
    dispatch({type: "delete dice", payload: {id: id}})   
  }
    return (
    <div onClick={()=>deletedice(id)} className="one-dice__dice-delete"></div>
  )
}
