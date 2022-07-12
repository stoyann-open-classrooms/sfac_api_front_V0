import { useContext, useEffect } from "react";
import RequestContext from "../../context/Request/RequestContext";
import './Home.css'
function HomeStats() {
    const { orders, requests, fetchOrders, fetchRequests } =
    useContext(RequestContext);

  useEffect(() => {
    fetchOrders();
    fetchRequests();
  }, []);
  return (
    <div className="home-recap">
<div className="recap">
    <h2>Demande a traiter</h2>
    <p>{requests.length}</p>
</div>
<div className="recap">
    <h2>commande en cours</h2>
    <p>{orders.length}</p>
</div>
    </div>
  )
}

export default HomeStats