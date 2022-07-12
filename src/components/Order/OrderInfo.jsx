import { useState } from 'react'
import { Link } from 'react-router-dom'
import EditOrderForm from '../../pages/Order/EditOrderForm'
import Dialog from '../Shared/Dialog/Dialog'
import './OrderInfo.css'

function OrderInfo({ request }) {
  const [order, setOrder] = useState({
    status: 'En cours',
    depart_fournisseur: '',
    date_livraison: '',
  })


  if (!request.id) {
    return <h1>loading...</h1>
  } else {
    return (
      <div className="order-info-container">
        <div className="order-info-top">
          <div>
            <h3>Date demande</h3>
            <p>{new Date(request.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <h3>Date Commande</h3>
            <p>{new Date(request.date_commande).toLocaleDateString()}</p>
          </div>

          <div>
            {request.depart_founisseur  ? (
              <div>
                <h3>Depart fournisseur</h3>
                <Dialog btn={'ajouter'}>
<EditOrderForm order={request}/>
</Dialog>
                </div>
              
            ) : (
              <div>
                <h3>Départ fournisseur</h3>
                <p>
                  {new Date(request.depart_fournisseur).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          {!request.date_livraison ? (
            <div>
              <h3>Date livraison</h3>
              <Dialog btn={'ajouter'}>
<EditOrderForm order={request}/>
</Dialog>
            </div>
          ) : (
            <div>
              <h3>Date livraison</h3>
              <p>{new Date(request.date_livraison).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default OrderInfo
