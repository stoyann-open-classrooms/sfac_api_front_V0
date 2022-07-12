import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import NoPics from "../Assets/no_picture.png";
import axios from "axios";
import AlertContext from "../../context/Alerte/AlerteContext";


function KanbansItem({ kanban }) {
  console.log(kanban);
  const {setAlert} = useContext(AlertContext)
  const deleteItem = (id) => {
 
   if(window.confirm('êtes vous certains de vouloir supprimer ce kanban? Cette action supprimera toutes les commandes liée au kanban.')) {

    axios.delete(`
    http://localhost:9000/sfac/api/kanban/${id}`);
    setAlert("Kanban supprimer", "error")

  }
  
  }
  return (
    <Card>
     

      <div className="card-cover">
      {!kanban.produitId ? (
        <img className="card-cover-img" src={NoPics} alt="" />
        ) : (
          <img  
          className="card-cover-img"
          src={"http://localhost:9000/" + kanban.produit.image}
          alt={kanban.produit.designation}
          />
          )}
      </div>


      <div className="card-info">
        <div>

      <h3 className='title-card'> kanban : {kanban.uid_nfc}</h3>
      </div>
        {kanban.produitId ? (
          
          <>
          <div>

<p>{kanban.produit.designation}</p>
          </div>
         
<p>Refference</p>
<p className='refference'>{kanban.produit.refference}</p>
{kanban.demandes.filter((demande) => demande.status === 'En cours')
          .map((order) => (
      <p className='txt-display green'>Commande en cours</p>
          
          ))}
          
</>


) : (<p className='no-product'>Ce kanban n'a pas de produit associée</p> )}

        
      </div>

      <button onClick={() => deleteItem(kanban.id)} className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/kanban/${kanban.id}`}>
        {/* TODO = formulaire d'edition d'un produit */}
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>

    </Card>
  )
}

export default KanbansItem