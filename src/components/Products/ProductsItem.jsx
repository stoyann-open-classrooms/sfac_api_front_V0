import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../Shared/Card/Card'
import axios from 'axios'
import AlertContext from "../../context/Alerte/AlerteContext"
function ProductsItem({ product }) {
  const {setAlert} = useContext(AlertContext)
  const deleteItem = (id) => {
 
    if(window.confirm('êtes vous certains de vouloir supprimer ce produit ?')) {
 
     axios.delete(`
     http://localhost:9000/sfac/api/produit/${id}`);
     setAlert(`Le  Produit a été supprimé avec succès`, 'error')
  
     setTimeout(() => window.location.reload(), 2000)
   }
   
   }
  return (
    <Card>
      <div className="card-cover">
        <img
          className="card-cover-img"
          src={'http://localhost:9000/' + product.image}
          alt={product.designation}
        />
      </div>
      <div className="card-info">
        <div>

        <h3>Désignation</h3>
        <p>{product.designation}</p>
        </div>
       <div>

        <h3>Réfférence</h3>
        <p className='refference'>{product.refference}</p>
       </div>
      </div>

      <button  onClick={() => deleteItem(product.id)}  className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/produit/${product.id}`}>
   
        {/* TODO = formulaire d'edition d'un produit */}
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>
    </Card>
  )
}

export default ProductsItem
