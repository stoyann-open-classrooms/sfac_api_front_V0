import React from 'react'
import OrdersList from '../../components/Orders/OrdersList'

function Orders() {
  return (
    <div className='main-container'>
      <h1 className="big-title">Commandes en cours</h1>
      <OrdersList/>
    </div>
  )
}

export default Orders