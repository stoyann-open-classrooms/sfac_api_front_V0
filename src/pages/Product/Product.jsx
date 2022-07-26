import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCover from '../../components/Product/ProductCover/ProductCover'
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo'
import ProductOrderTable from '../../components/Product/ProductOrderTable/ProductOrderTable'
import ProductStats from '../../components/Product/ProductStats/ProductStats'
import ProductContext from '../../context/Product/ProductContext'

import './styles/Product.css'
function Product() {
  const params = useParams()
  const { getProduct, product, loading } = useContext(ProductContext)
  useEffect(() => {
    getProduct(params.id)
  }, [])
  console.log(product)
  if (loading) {
    return <h1> chargement ...</h1>
  } else {
    return (
      <div className="main-container">
        <h2 className="big-title">{product.designation}</h2>
        <div className="product-hero">
          <ProductCover image={`http://localhost:5000/${product.image}`} />

          <ProductInfo product={product} />
        </div>
        {product.kanban ? (
          <>
            <div className="mini-card_info">
              <Link to={`/kanban/${product.kanban.id}`}>
                <p className="standart">Kanban : {product.kanban.uid_nfc}</p>
              </Link>
            </div>

            <h2 className="main-subtitle">Délai enregistré</h2>
            <ProductStats product={product} />
          </>
        ) : (
          <div className="no-kanban">
            <h3 className="danger">Ce produit n'a pas de kanban.</h3>
            <p>
              Depuis la page <a href={'/kanbans'}>Kanban</a> assigner ce produit
              a un kanban vide
            </p>
          </div>
        )}

        <ProductOrderTable product={product} />
      </div>
    )
  }
}

export default Product
