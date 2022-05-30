import React from 'react'


export default function ModalInfo(    { visible = false,  onClose}  ) {
    
    
    if (!visible) return null
   
    return (
              <div className='modal' onClick={onClose}>  
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Info</h3>
                        <span className='modal-close' onClick={onClose}>&times;</span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-content'>
                          Virtual game dice. Throw all together or separately.
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
              </div>
              
    )
  }

