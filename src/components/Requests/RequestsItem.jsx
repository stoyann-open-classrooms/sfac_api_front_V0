import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import NoPics from '../Assets/no_picture.png'
import Dialog from '../Shared/Dialog/Dialog'
import RequestsAddForm from './RequestsForm'
import axios from 'axios'
import './Requests.css'
function RequestsItem({ request }) {

  const deleteItem = (id) => {
 
    if(window.confirm('êtes vous certains de vouloir supprimer cette demande ?')) {
 
     axios.delete(`
     http://localhost:9000/sfac/api/demande/${id}`);
     window.location.reload();
   }
   
   }
  return (
    <Card>
      <div className="card-cover">
     
      {!request.kanban.produitId ? (
            <img  className='card-cover-img' src={NoPics} alt="" />
          ) : (
            <img 
            className='card-cover-img'
              src={'http://localhost:9000/' + request.kanban.produit.image}
              alt={request.designation}
            />
          )}
      </div>
      <div className="card-info-request">
        <h3 className='title-card-kanban'>kanban : {request.kanban.uid_nfc}</h3>
        <h3 className='title-card-kanban'>{request.kanban.produit.designation}</h3>
        <p className='refference'>{request.kanban.produit.refference}</p>



 
        <h3>Date demande</h3>
        <p>{new Date(request.createdAt).toLocaleDateString()}</p>

     
   
   

<div className="box">

     <Dialog btn={'Traiter'} addIcone={true} >
     <RequestsAddForm request={request}/>
       </Dialog>
</div>
      
      
      
      </div>
  

      <button  onClick={() => deleteItem(request.id) } className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/kanban/${request.kanban.id}`}>
        {/* TODO = formulaire d'edition d'un produit */}
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>
    </Card>
  )
}

export default RequestsItem
