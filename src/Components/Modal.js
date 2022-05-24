import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Modal(    {id, visible = false,  onClose}  ) {
    

   const unapplyedmaxvalue = useSelector((state)=>JSON.parse(JSON.stringify(state.unapplyedmaxvalue)));
   const dispatch=useDispatch();
   const onApply = () => dispatch({type: "set max value", payload: {id: id}});  //applying settings
   const saveUnapplyedSetting  = (event) => dispatch({type: "save Unapplyed Setting", payload: {unapplyedmaxvalue: Number(event.target.value)}}); 


    
    if (!visible) return null
   
    return (
      <div className='modal' onClick={onClose}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h3 className='modal-title'>Settings</h3>
                <span className='modal-close' onClick={onClose}>&times;</span>
            </div>
            <div className='modal-body'>
                <div className='modal-content'>
                    <label>Max value<input type= "number" min="1" max="99" value={unapplyedmaxvalue} onChange={(event)=>saveUnapplyedSetting(event)}/></label>
                </div>
            </div>
           <div className='modal-footer'>
               <button onClick={onApply}>Apply</button>
               <button onClick={onClose}>Close</button>
            </div>
        </div>
      </div>
    )
  }

