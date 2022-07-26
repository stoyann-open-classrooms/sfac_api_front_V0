import { useContext } from "react";
import Card from "../../Shared/Card/Card";
import { Link } from 'react-router-dom'
// === icones
import { FaTimes, FaEdit } from 'react-icons/fa'
import RequestContext from "../../../context/Request/RequestContext";
import Dialog from "../../Shared/Dialog/Dialog";
import RequestsForm from "../RequestsForm/RequestsForm";
function RequestsItem({request}) {
    const { deleteRequest } = useContext(RequestContext)
  
  console.log(request);
    return (
        <Card image={request.kanban.produit.image} item={request}>
    
    <div className="card-request-hero">
        <div className="text">
      <h3 className="card-title"> Kanban {request.kanban.uid_nfc}</h3>
      <h3 className="card-subtitle">{request.kanban.produit.designation}</h3>

        </div>

      <Dialog btn={'Traiter'} addIcone={true} >
     <RequestsForm request={request}/>
       </Dialog>
    </div>
        
      <div className="card-info">
      <div className="mini-card">
          <h3>Date demande</h3>
          <p className="refference">{new Date(request.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
       

   
      <button onClick={() => deleteRequest(request.id)} className="close">
        <FaTimes color="red" />
      </button>
      {/* <button onClick={() => deleteProduct(product.id)} className="close">
        <FaTimes color="red" />
      </button> */}
      {/* <Link to={`/product/${product.id}`}>
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link> */}
    </Card>
  )
}

export default RequestsItem