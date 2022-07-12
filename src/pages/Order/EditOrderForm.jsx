import { useState } from "react";
import axios from "axios";
import Button from "../../components/Shared/Button/Button";

function EditOrderForm({order}) {


    
    const [message, setMessage] = useState("");
    const [editOrder, setEditOrder] = useState({
      status: "En cours",
      depart_fournisseur: "",
    });
    const handleForm = (e) => {
        e.preventDefault();
        if (editOrder.depart_fournisseur === "") {
          setMessage("Vous devez entrez une date");
          return;
        }
         else {
          console.log(editOrder , order.id);
          
          e.preventDefault();
          axios.put(`http://localhost:9000/sfac/api/demande/${order.id}`, editOrder);
          window.location.reload();
          console.log("submit !");
          setMessage("");
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
            <label htmlFor="date_commande">Date de commande</label>
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