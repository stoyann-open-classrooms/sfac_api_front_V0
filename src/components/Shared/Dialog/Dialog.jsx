import { useState } from "react";
import close_icone from "../../Assets/icones/close_icone.svg";
import Add_icone from "../../Assets/icones/red/add_red.png";
import Alert from "../Alert/Alert";


function Dialog({ btn, children, addIcone, editIcone}) {
  const [modal, setModal] = useState(true);
  
  const toogleModal = (e) => {
   
      setModal(!modal);

    
    
  };


  return (
    <>
      <button className="add-btn"  onClick={toogleModal}>
       {!addIcone ? (<img src={Add_icone} alt="" />) : ("") }
        
       {btn}
      </button>
      {!modal ? (
        <div className="overlay">
          <div className="modal">
            <button onKeyUp={toogleModal} onClick={toogleModal} className="close-Modal">
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
