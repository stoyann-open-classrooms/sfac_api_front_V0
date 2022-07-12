import {useEffect, useContext} from 'react'
import OrderInfo from '../../components/Order/OrderInfo'
import { useParams } from 'react-router-dom'

import RequestContext from '../../context/Request/RequestContext'
import ProductInfo from '../../components/Order/ProductInfo'
import Dialog from '../../components/Shared/Dialog/Dialog'
import EditOrderForm from './EditOrderForm'
function Order() {

  const { getRequest, request, loading } = useContext(RequestContext)
  

  const params = useParams()
  useEffect(() => {
    getRequest(params.id)
   
  }, [])



if(loading) {
  return <h1> chargement ...</h1>
} else {
  return (
    <div className='main-container'>
         <div className='title-kanban'>
      <p className='title-tag'>{request.status}</p>
      <h1 className='big-title'>Commande -  {request.num_commande}</h1>
      </div>
      <Dialog btn={'Modifier'}>
<EditOrderForm order={request}/>
</Dialog>
{request.date_livraison === null ? (
  
  <h2 className='days-unt'>Jours dépuis la demande
  <span>
{Math.round(
  (Date.now() - new Date(request.createdAt).getTime()) /
  (1000 * 3600 * 24)
  )}  
  </span> 

</h2>
  
  ): (
    <>
    <h2 className='days-unt'>Cette commande a mis 
  <span>
  {Math.round(
    (new Date(request.date_livraison) - new Date(request.createdAt).getTime()) /
    (1000 * 3600 * 24)
    )}  
    </span> 
     jours pour être livrée.
    </h2>
  
    </>
    
)}

        
      
      
   
  <OrderInfo request={request}/>
  <ProductInfo request={request}/>
    </div>
  )
}}

export default Order