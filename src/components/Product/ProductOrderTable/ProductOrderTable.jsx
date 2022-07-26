import {useEffect, useContext} from 'react'

import OrderContext from '../../../context/Order/OrderContext'
import Button from '../../Shared/Button/Button'
import { Link } from 'react-router-dom'
function ProductOrderTable({product}) {
  

  const { fetchOrdersRecue, recue} = useContext(OrderContext)
  console.log(product);
  const result  =
  recue.sort((a,b) => {
    return b.id - a.id
  })
 
  useEffect(() => {
  
    fetchOrdersRecue() 
  }, [])
console.log(recue);


  return (
    <>
    <h2 className="big-title ">Historique des commandes</h2>
          <table>
    <thead>
      <tr>
        <th>Identifiant</th>
        <th>numero de commande</th>
        <th>quantité commandé</th>
        <th>Date Commande</th>
        <th>Départ fournisseur</th>
        <th>Date Livraison</th>
        <th>Nombre de jours</th>

      </tr>
    </thead>
    <tbody>

    {result.filter((demande) =>  demande.status === 'Reçue' ).filter((demande) => demande.produitId === product.id)
      
          .map((order) => (
            <tr key={order.id}  order={order} >
              <td>CO{order.id}</td>
                <td>
               <Link to={`/order/${order.id}`}>
               <Button className='order-link' >
                
                
                {order.num_commande}  </Button> 
               </Link>
                
                </td>
               
       
                <td>{order.quantite_commande}</td>
               
                <td>{new Date(order.date_commande).toLocaleDateString()}</td>
                <td>{new Date(order.depart_fournisseur).toLocaleDateString()}</td>
                <td>{new Date(order.date_livraison).toLocaleDateString()}</td>
                <td> {Math.round(
                  (new Date(order.date_livraison) - new Date(order.date_commande).getTime()) /
            (1000 * 3600 * 24),
            )}</td>
            </tr>
          
          ))}


     
       
    </tbody>
  </table>
  
          </>
  )
}

export default ProductOrderTable