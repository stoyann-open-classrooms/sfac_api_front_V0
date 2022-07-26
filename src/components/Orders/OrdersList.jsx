import Dialog from '../Shared/Dialog/Dialog'
import OrdersItem from './OrdersItem'

function OrdersList({orders}) {

  if (!orders) {
    return <h1>loading...</h1>
  } else {
    return (

        <div>
        <div className="info-list">
          <h3>
         Commandes en cours
           <span className="nb-info danger">{orders.length} </span>{' '}
          </h3>
         
        </div>
        <section className="list">
          {orders.filter((order) => order.archive === false)
          
          .map((order) => (
              <OrdersItem  key={order.id} order={order} />
            ))}
        </section>
      </div>
    )
  }
}


export default OrdersList
