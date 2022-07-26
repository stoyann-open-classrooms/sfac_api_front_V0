import { createContext, useReducer, useContext } from 'react'
import productReducer from './ProductReducer'
import AlertContext from '../Alerte/AlerteContext'
import axios from 'axios'
const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    loading: false,
  }
  
  const { setAlert } = useContext(AlertContext)
  const [state, dispatch] = useReducer(productReducer, initialState)

  //get initial users (testing purpose)
  const fetchProducts = async () => {
    setLoading()
    const response = await fetch(
      `http://localhost:5000/sfac/api/produit/allProduits`,
    )

    const data = await response.json()

    dispatch({
      type: 'GET_PRODUCTS',
      payload: data.data,
    })
  }

  const getProduct = async (login) => {
    setLoading()
    const response = await fetch(
      `http://localhost:5000/sfac/api/produit/${login}`,
    )
    const data = await response.json()

    dispatch({
      type: 'GET_PRODUCT',
      payload: data,
    })
  }
  const AddProduct = async (newProduct) => {
    axios.post('http://localhost:5000/sfac/api/produit/addProduit', newProduct)
    setTimeout(() => window.location.reload(), 2000)
    setAlert('Le produit a étè ajouter a la base de données', 'success')
  }

  const deleteProduct = (id) => {
    if (window.confirm('Êtes vous sur de vouloir supprimer ce produit ?')) {
      axios.delete(`
     http://localhost:5000/sfac/api/produit/${id}`)
     setTimeout(() => window.location.reload(), 1000)
     setAlert('Produit supprimé')
    }
   
  }

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        fetchProducts,
        getProduct,
        AddProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
