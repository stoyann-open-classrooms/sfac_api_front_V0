import Dialog from '../../Shared/Dialog/Dialog'
import ProductAddOrder from '../ProductAddOrder/ProductAddOrder'

function ProductInfo({ product }) {
  console.log(product)
  return (
    <>
      <div className="dialog-btn">
        <Dialog btn={'commander'}>
          <ProductAddOrder productId={product.id} />
        </Dialog>
      </div>

      <div className="product-info">
        <div className="mini-card-info">
          <h3>refference</h3>
          <p className="standart">{product.refference}</p>
        </div>
        <div className="mini-card_info">
          <h3>Stock actuel</h3>
          {product.stock === 0 ? (
            <p className="danger">RUPTURE</p>
          ) : (
            <p className="success">{product.stock}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductInfo
