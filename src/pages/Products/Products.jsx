import ProductsActions from '../../components/Products/ProductsActions'
import ProductsList from '../../components/Products/ProductsList'

function Products() {


 





  return (
    <div className='main-container'>
      <h1 className='big-title'>Produits</h1>
        <ProductsActions/>
     
        <ProductsList/>
    </div>
  )
}

export default Products