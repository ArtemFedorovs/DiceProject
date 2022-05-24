import React,  { useState } from 'react';

import Modal from './Modal.js';

export default function DiceSettings({id}) {
 

 const [isModal, setModal] = React.useState(false) ;  //State for visibility of modal window
 const onClose = () => setModal(false);           //Changing visibility of modal window
 const openModal= () => setModal(true);

  return (
    <div className="one-dice__dice-settings" onClick={(event) => openModal(event)}>
      <Modal key={id}
        id={id}
        visible={isModal}
        onClose={onClose}
      />
    </div>)
}

