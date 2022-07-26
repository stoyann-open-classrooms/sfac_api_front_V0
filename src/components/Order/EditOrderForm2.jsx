import { useState, useContext } from "react";
import axios from "axios";
import Button from "../../components/Shared/Button/Button";
import AlertContext from "../../context/Alerte/AlerteContext";
function EditOrderForm2({order}) {


  const { setAlert } = useContext(AlertContext)
    const [message, setMessage] = useState("");
    const [editOrder, setEditOrder] = useState({
      status: "Reçue",
      date_livraison: "",
      archive:"true"

    });
    const [newStock, setNewStock] = useState({
     stock: order.produit.stock + order.quantite_commande
    });
    const handleForm = (e) => {
        e.preventDefault();
        if (editOrder.date_livraison === "") {
          setMessage("Vous devez entrez une date de livraison");
          return;
        } 
         else {
          console.log(editOrder , order.id);
          
          e.preventDefault();
          axios.put(`http://localhost:5000/sfac/api/commande/${order.id}`, editOrder);
          axios.put(`http://localhost:5000/sfac/api/produit/${order.produitId}`, newStock );
          setTimeout(() => window.location.reload(), 2000)
          setAlert(` Commande modifié avec succées. ${order.quantite_commande} unités ajoutés au stock.`)
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
       
      
        <label htmlFor="deate_livraison">Date de livraison</label>
        <div className="input-group">
          <input
            onChange={handleInput}
            id="date_livraison"
            type="date"
            name="date_livraison"
            value={editOrder.date_livraison}
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

export default EditOrderForm2