import {useState , useContext, useEffect} from 'react'
import axios from 'axios'
import ProductContext from "../../context/Product/ProductContext";
import { useParams } from 'react-router-dom'


function KanbanEditForm({kanban }) {
  const [updateKanban, setUpdateKanban] = useState({})
  const { products, fetchProducts } = useContext(ProductContext)

const params = useParams()
  useEffect(() => {
  
    fetchProducts()
  }, [])
  console.log(params.id);


    const handleForm = (e) => {
        e.preventDefault()
        console.log(updateKanban)
        axios.put(
          `http://localhost:9000/sfac/api/kanban/${params.id}`,
          updateKanban,
        )
       
  
      }
    
      const handleInput = ({ currentTarget }) => {
        const { name, value } = currentTarget
        console.log(value)
        setUpdateKanban({
          ...updateKanban,
          [name]: value,
        })
      }
  return (
    <form>
    <h3 className='title-card'>Associé le kanban a un produit</h3>
    <div className="form-group">
      <select onChange={handleInput} name="produitId" id="">
        <option value="">Choisir une refference</option>
        {products.map((item) => (
          <option
            name="produitId"
            value={item.id}
            key={item.id}
            item={item}
          >
            {item.refference} <span> des :{item.designation}</span>
          </option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <button className="add-btn" onClick={handleForm}>
        ajouter
      </button>
    </div>
  </form>
  )
}

export default KanbanEditForm