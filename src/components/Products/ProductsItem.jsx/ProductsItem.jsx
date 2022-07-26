// === dependences
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// === icones
import { FaTimes, FaEdit } from 'react-icons/fa'
// === composants
import Card from '../../Shared/Card/Card'
// === context
import ProductContext from '../../../context/Product/ProductContext'

function ProductsItem({ product }) {
  const { deleteProduct } = useContext(ProductContext)
  
 

  return (
    <Card image={product.image} item={product}>
      <h3 className="card-title">{product.designation}</h3>

      <div className="card-info">
        <div className="mini-card">
          {product.stock === 0 ? (
            <>
              <h3>Stock</h3>
              <p className="rupture">Rupture</p>
            </>
          ) : (
            <>
              <h3>Stock</h3>
              <p className="stock">{product.stock}</p>
            </>
          )}
        </div>
        <div className="mini-card">
          <h3>Réfference</h3>
          <p className="refference">{product.refference}</p>
        </div>
      </div>
      {product.kanban ? (
        <div className="mini-card">
          <h3 className="standart">Kanban {product.kanban.uid_nfc}</h3>
        </div>
      ) : (
        <div className="mini-card">
          <h3 className="danger">Aucun kanban</h3>
        </div>
      )}

      {product.commandes
        .filter((commande) => commande.archive === false)
        .map((commande) => (
          <p key={commande.id} className=" inOrder">
            Commande en cours
          </p>
        ))}

      <button onClick={() => deleteProduct(product.id)} className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/product/${product.id}`}>
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>
    </Card>
  )
}

export default ProductsItem
