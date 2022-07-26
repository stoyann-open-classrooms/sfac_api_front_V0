import { useState, useContext } from "react";
import axios from "axios";
import Button from "../Shared/Button/Button";
import AlertContext from "../../context/Alerte/AlerteContext";
function EditOrderForm({order}) {

  const { setAlert } = useContext(AlertContext)
    
    const [message, setMessage] = useState("");
    const [editOrder, setEditOrder] = useState({
      status: "En cours",
      depart_fournisseur: "",

    });
    const handleForm = (e) => {
        e.preventDefault();
        if (editOrder.depart_fournisseur === "") {
          setMessage("Vous devez entrez une date de depart fournisseur");
          return;
        } 
         else {
          console.log(editOrder , order.id);
          
          e.preventDefault();
          axios.put(`http://localhost:5000/sfac/api/commande/${order.id}`, editOrder);
          setTimeout(() => window.location.reload(), 2000)
          setAlert('la commande a une date de depart fournisseur status: En cours')
          setEditOrder({
           depart_fournisseur: "",
          });
        }
       
      };

    const handleInput = ({ currentTarget }) => {
        const { name, value } = currentTarget;
    
        setEditOrder({
          ...editOrder,
          [name]: value,
        });
        console.log(editOrder);
      };
      
  return (
    <form onSubmit={handleForm}>
       
      
        <label htmlFor="depart_fournisseur">Depart fournisseur</label>
        <div className="input-group">
          <input
            onChange={handleInput}
            id="depart_fournisseur"
            type="date"
            name="depart_fournisseur"
            value={editOrder.depart_fournisseur}
            />
        </div>
            
      
        
       
        <div className="form-group">
          <Button    type="submit" version={"secondary"}>
            Valider
          </Button>
        </div>
        {message && <div className="message">{message}</div>}

    </form>
  )
}

export default EditOrderForm