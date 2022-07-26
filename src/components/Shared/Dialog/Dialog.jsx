import { useState } from "react";
import close_icone from "../../Assets/icones/close_icone.svg";
import Add_icone from "../../Assets/icones/red/add_red.png";

import './styles/Dialog.css'
import Button from "../Button/Button";
import Alert from "../Alert/Alert";



function Dialog({ btn, children, addIcone, editIcone}) {
  const [modal, setModal] = useState(true);
  
  const toogleModal = (e) => {
      setModal(!modal);
  };


  return (
    <>
      <Button toogle={toogleModal}>
       {!addIcone ? (<img src={Add_icone} alt="" />) : ("") }
        
       {btn}
      </Button>
      {!modal ? (
        <div className="overlay">
          <div className="modal">
            <button onClick={toogleModal} className="close-Modal">
              <img
                src={close_icone}
                alt="fermeture boite de dialogue."
              />
       
            </button>
            <div className='dialog_form'>
            <Alert/>
           
        {children}
    </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dialog;
