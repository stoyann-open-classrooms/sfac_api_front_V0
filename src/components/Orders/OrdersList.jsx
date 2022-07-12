import { useContext, useEffect } from "react";
import RequestContext from "../../context/Request/RequestContext";
import OrdersItem from './OrdersItem';

function OrdersList() {
    const { orders, loading, fetchOrders } = useContext(RequestContext);

    useEffect(() => {
      fetchOrders();
    }, []);
  
    if (!loading || orders.length === 0) {
      return (
        <div className="list">
          {orders.map((order) => (
            <OrdersItem key={order.id}  order={order} />
          ))}
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }

export default OrdersList