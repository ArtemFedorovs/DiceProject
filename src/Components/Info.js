import React,  { useState } from 'react';
import ModalInfo from './ModalInfo.js';

export default function Info() {
    const [isModal, setModal] = React.useState(false) ;  //State for visibility of modal window
    const onClose = () => setModal(false);           //Changing visibility of modal window
    const openModal= () => setModal(true);


    return (<>
        <div className="game-table__info" onClick={(event) => openModal(event)}/> 
        <ModalInfo        
        visible={isModal}
        onClose={onClose}/>
        </>
    )
}
