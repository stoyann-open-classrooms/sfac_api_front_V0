import { useState } from "react";
import axios from "axios";
import Button from "../Shared/Button/Button";
import { useContext } from "react";
import AlertContext from "../../context/Alerte/AlerteContext";
import Alert from "../Shared/Alert/Alert";

function RequestsForm({request}) {

  const [message, setMessage] = useState("");
const {setAlert} = useContext(AlertContext)


  const [order, setOrder] = useState({
    status: "En cours",
  
    num_commande: "",
    date_commande: "",
    quantite_commande: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (order.date_commande === "") {
      setAlert("Vous devez entrez une date", 'error');
      return;
    }
    if (order.num_commande === "") {
      setAlert("Vous devez entrez un numéro de commande", 'error');
      return;
    }
    if (order.quantite_commande === "") {
      setAlert("Vous devez entrez une quantité a la  commande", 'error');
      return;
    } else {
      console.log(order , request.id);
      
      e.preventDefault();
      axios.put(`http://localhost:9000/sfac/api/demande/${request.id}`, order);
      
      setAlert("demande traiter", 'error');
   
      setTimeout(() => window.location.reload(), 2000)
      setMessage("");
      setOrder({
        status: "En cours",
        num_commande: "",
        date_commande: "",
        quantite_commande: "",
      });
    }
   
  };
  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setOrder({
      ...order,
      [name]: value,
    });
  };
  return (
   
      <form    className="add_product_form" onSubmit={handleForm}>
       
     
        <div className="input-group">
          <input
            onChange={handleInput}
            id="date_commande"
            type="date"
            name="date_commande"
            value={order.date_commande}
          />
        </div>
        <div className="input-group">
          <input
            onChange={handleInput}
            type="number"
            placeholder="Quantité commande"
            id="quantite_commande"
            name="quantite_commande"
            value={order.quantite_commande}
          />
        </div>
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Numéro de commande"
            id="num_commande"
            name="num_commande"
            value={order.num_commande}
          />
        </div>
        <div className="form-group">
          <Button   className="btn-form-submit"  type="submit" version={"secondary"}>
            Valider
          </Button>
        </div>
        
      </form>

  );
}

export default RequestsForm;
