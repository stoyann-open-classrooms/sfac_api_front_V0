import { useContext } from 'react'
import SearchContext from '../../../context/Search/searchContext'

import Dialog from '../../Shared/Dialog/Dialog'
import ProductAddForm from '../ProductsAddForm/ProductsAddForm'
import ProductsItem from '../ProductsItem.jsx/ProductsItem'

function ProductsList({ products }) {
  const { searchValue } = useContext(SearchContext)

  if (!products) {
    return <h1>loading...</h1>
  } else {
    return (
      <div>
        <div className="info-list">
          <h3>
            Produits en base de donées{' '}
            <span className="nb-info danger">{products.length} </span>{' '}
          </h3>
          <Dialog  btn={'ajouter'}>
            <ProductAddForm/>
          </Dialog>
        </div>
        <section className="list">
          {products
            .filter((val) => {
        
              if (searchValue === '') {
                return val
              } else if (
                
                val.designation
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                val.refference.toLowerCase().includes(searchValue.toLowerCase() || val.kanban.uid_nfc.toLowerCase.includes(searchValue.toLowerCase()))
              ) {
                return val
              }
            })
            .map((product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
        </section>
      </div>
    )
  }
}

export default ProductsList
