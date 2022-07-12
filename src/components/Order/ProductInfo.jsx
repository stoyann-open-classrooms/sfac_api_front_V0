import React from 'react'
import { Link } from 'react-router-dom';
import './OrderInfo.css'
function ProductInfo({request}) {
    if (!request.kanban) {
        return (
            <h1>loading...</h1>
        
        );
      } else {

  return (
    <div className='order-product-info'>
<div className="order-product-info-image">
    <img src={'http://localhost:9000/' + request.kanban.produit.image} alt="" />
</div>
<div className="order-product-info-body">
<h3>{request.kanban.produit.designation}</h3>
<h3> Refference <span>
    <Link to={`/produit/${request.kanban.produitId}`}>
     {request.kanban.produit.refference}  
    </Link></span>
    </h3>
<h3> kanban <span>
    <Link to={`/kanban/${request.kanban.id}`}>
     {request.kanban.uid_nfc}  
    </Link></span>
    </h3>
   
</div>

    </div>
  )
}
}
export default ProductInfo