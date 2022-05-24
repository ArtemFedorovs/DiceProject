import React from 'react'
import moreicon from './icons/more_icon.png'
import AddDiceButton from './AddDiceButton.js';
import RerollAllButton from './RerollAllButton.js';
import ClearTableButton from './ClearTableButton.js';

export default function ControlPanel() {

  
  function toggleVisiability(){
    const target= document.querySelector(".control-panel__hiden-buttons");
    target.classList.toggle("visible");
    
  };

if (document.body.clientWidth>=600) return(
  <div className="control-panel">
    <RerollAllButton/>
    <AddDiceButton/>
    <ClearTableButton/>
  </div>
);
else if (document.body.clientWidth>=485)  return(  // width of 2 regular buttons and 1 "more" button
  <div className="control-panel">
    <RerollAllButton/>
    <ClearTableButton/>
    <div onClick={()=>toggleVisiability()} className="control-panel__reveal-button">
      <img  className="control-panel__more-img" src={moreicon} alt='?' />
      <div  className="control-panel__hiden-buttons">
        <AddDiceButton/>
      </div>
    </div>
  </div>
) ;    
else return(
  <div className="control-panel">
          <RerollAllButton/>
          <div onClick={()=>toggleVisiability()} className="control-panel__reveal-button">
            <img  className="control-panel__more-img" src={moreicon} alt='?' />
            <div  className="control-panel__hiden-buttons">
              <AddDiceButton/>
              <ClearTableButton/>
            </div>
          </div>     
  </div>
) ;

}
