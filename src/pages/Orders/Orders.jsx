import { useContext, useEffect } from 'react'
import OrderContext from '../../context/Order/OrderContext'
import Alert from '../../components/Shared/Alert/Alert'

import OrdersList from '../../components/Orders/OrdersList'
function Orders() {
  const { orders, loading, getAllCommandes } = useContext(OrderContext)
  useEffect(() => {
    getAllCommandes()
  }, [])
  console.log(orders)


  if (loading) {
    return (
        <h1>loading...</h1>
    
    );
  } else {
  return (
    <div className="main-container">
      <h1 className="big-title">Commandes en cours</h1>
      <Alert/>
      <OrdersList orders={orders}/>
    </div>
  )
}
}
export default Orders
