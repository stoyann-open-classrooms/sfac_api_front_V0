import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import NoPics from '../Assets/no_picture.png'
import { Link } from 'react-router-dom'

function OrdersItem({ order }) {
  console.log(order)
  return (
    <Card image={order.produitId ? `${order.produit.image}` : ''}>
          {order.produit ? (
            <>
          <h2 className='card-title'>{order.produit.designation}</h2>
            <div className="card-date">
          <h3 className="standart">Kanban {order.produit.kanban.uid_nfc}</h3>
        </div>
            </>
      ) : (
        <div className="card-date">
          <h3 className="danger">Aucun kanban</h3>
        </div>
      )}
      
         
          <p className='status'>{order.status}</p>
        
      <div className="card-info-order">
       
     <div className="card-info-date">

        <div className="card-date">
          <h3>date commande</h3>
          <p className="stock">
            
            {new Date(order.date_commande).toLocaleDateString()}
          </p>
        </div>
        <div className="card-date">
          <h3>depart fournisseur</h3>
          <p className="stock">
            {new Date(order.date_commande).toLocaleDateString()}
          </p>
        </div>
     </div>
     <div className="card-info-date">

       
        <div className="card-date">
          <h3>livraison prévu</h3>
          <p className="stock">
            {new Date(order.date_commande).toLocaleDateString()}
          </p>
        </div>
     </div>
   

       
        
     </div>
      

     

      <button className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/order/${order.id}`}>
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>
      <div className="num-display">
        {Math.round(
          (Date.now() - new Date(order.date_commande).getTime()) /
            (1000 * 3600 * 24),
        )}
      </div>
    </Card>
  )
}

export default OrdersItem
