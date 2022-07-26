import React from 'react'
import EditOrderForm from './EditOrderForm'
import EditOrderForm2 from './EditOrderForm2'
import Dialog from '../Shared/Dialog/Dialog'

function OrderActions({order}) {
  return (
    <div className='order-actions'>
       

    {order.status === 'Fournisseur' ? (
        <>
        <h2>Status <span className='warning'> {order.status}</span></h2>

        <Dialog btn={"modifier"}>
      <EditOrderForm order={order}/>
    </Dialog>
        </>
      
      ) : (
        <>
        <h2>Status <span className='success'> {order.status}</span></h2>
      <Dialog btn={"modifier"}>
          <EditOrderForm2 order={order}/>
        </Dialog>
        </>
    )}
     
        
        
      
  </div>
  )
}

export default OrderActions