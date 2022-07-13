import React from 'react'
import './KanbanOrderTable.css'
function KanbanOrderTable({kanban}) {
  return (
   
          <table>
    <thead>
      <tr>
        <th>numero de commande</th>
        <th>quantité commandé</th>
        <th>Date demande</th>
        <th>Date Commande</th>
        <th>Départ fournisseur</th>
        <th>Date Livraison</th>
        <th>Nombre de jours</th>

      </tr>
    </thead>
    <tbody>

    {kanban.demandes.filter((demande) => demande.status === 'Reçue')
          .map((order) => (
            <tr key={order.id}  order={order} >
                <td>
                  
               <button className='order-link' >
                <a href={`/order/${order.id}`}>
                {order.num_commande}  </a> </button> </td>
               
       
                <td>{order.quantite_commande}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{new Date(order.date_commande).toLocaleDateString()}</td>
                <td>{new Date(order.depart_fournisseur).toLocaleDateString()}</td>
                <td>{new Date(order.date_livraison).toLocaleDateString()}</td>
                <td> {Math.round(
          (new Date(order.date_livraison) - new Date(order.createdAt).getTime()) /
            (1000 * 3600 * 24),
        )}</td>
            </tr>
          
          ))}


     
       
    </tbody>
  </table>
  
  )
}

export default KanbanOrderTable