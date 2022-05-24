import React from 'react'
import { useDispatch } from 'react-redux';


export default function ClearTableButton() {
  const dispatch=useDispatch();
  function clearTable(){
    dispatch({type: "Clear table"});
  };
  return (
    <button  onClick={()=>clearTable()} className="button-for-panel">Clear the table</button>
  )
}
