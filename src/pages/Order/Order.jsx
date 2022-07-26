
import { useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import OrderActions from "../../components/Order/OrderActions"
import './styles/Order.css'
import OrderContext from "../../context/Order/OrderContext"

function Order() {
const params = useParams()
  const { order, loading, getOrder } = useContext(OrderContext)

  useEffect(() => {
    getOrder(params.id)
  }, [])

if (loading) {
  return <h1> chargement ...</h1>
} else {
  return (
   <div className="main-container">
    <h1 className="big-title">Commande - {order.num_commande}</h1>
    <OrderActions order={order}/>
   </div>
  )
}
}
export default Order