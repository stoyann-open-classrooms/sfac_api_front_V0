import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import NoPics from '../Assets/no_picture.png'
import { Link } from 'react-router-dom'
import "../Orders/Orders.css"
import './Kanban.css'
function KanbanOrdersItem({ order }) {
  return (
    <Card>
        <div className="card-info-kanban-order">
            <div className="card-body-item">

<h3>Numéro de commande</h3>
            <p>{order.num_commande}</p>
            </div>
            <div className="card-body-item">

<h3>Quantité commande</h3>

            <p>{order.quantite_commande}</p>
            </div>
            <div className="card-body-item">


<h3>Date demande</h3>
         <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="card-body-item">


<h3>Date commande</h3>
         <p>{new Date(order.date_commande).toLocaleDateString()}</p>
            </div>
            <div className="card-body-item">

<h3>Date départ fournisseur</h3>

         <p>{new Date(order.depart_founisseur).toLocaleDateString()}</p>
            </div>
            <div className="card-body-item">

<h3>Date livraison</h3>

         <p>{new Date(order.date_livraison).toLocaleDateString()}</p>
            </div>
        </div>
        <div className="num-display">
        {Math.round(
          (new Date(order.date_livraison) - new Date(order.createdAt).getTime()) /
            (1000 * 3600 * 24),
        )}
      </div>
    </Card>

  )
}

export default KanbanOrdersItem
