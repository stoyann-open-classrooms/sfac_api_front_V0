import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import NoPics from '../Assets/no_picture.png'
import { Link } from 'react-router-dom'
import "./Orders.css"
function OrdersItem({ order }) {
  return (
    <Card>
      <div className="card-cover">
        {!order.kanban.produitId ? (
          <img className="card-cover-img" src={NoPics} alt="" />
        ) : (
          <img
            className="card-cover-img"
            src={'http://localhost:9000/' + order.kanban.produit.image}
            alt={order.kanban.produit.designation}
          />
        )}
      </div>
      <div className="card-info">
    <h3>{order.kanban.produit.designation}</h3>
    <p>{order.kanban.produit.refference}</p>

<div className="card-date">
  <div>

<h5>Demande</h5>
<p> {new Date(order.createdAt).toLocaleDateString()}</p>
  </div>

  
<div>

  <h5>Commande</h5>
              <p> {new Date(order.date_commande).toLocaleDateString()}</p>
</div>

 
  <div>

  <h5>Départ founisseur</h5>
              {order.depart_fournisseur === null ? (
                <p>En cours</p>
                
                ) : (
                  <p> {new Date(order.depart_fournisseur).toLocaleDateString()}</p>
                  )}
 
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
          (Date.now() - new Date(order.createdAt).getTime()) /
            (1000 * 3600 * 24),
        )}
      </div>

    </Card>
  )
}

export default OrdersItem
