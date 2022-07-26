import { useState, useContext } from 'react'
import AlertContext from '../../../context/Alerte/AlerteContext'

import ProductContext from '../../../context/Product/ProductContext'

function ProductAddForm() {
  const [product, setProduct] = useState({
    designation: '',
    refference: '',
    stock: '',
  })
  const [image, setImage] = useState('')
  const { AddProduct } = useContext(ProductContext)
  const { setAlert } = useContext(AlertContext)

  const formData = new FormData()
  formData.append('image', image)
  formData.append('designation', product.designation)
  formData.append('refference', product.refference)
  formData.append('stock', product.stock)
  const handleForm = (e) => {
    e.preventDefault()

    if (image === '') {
      setAlert('Vous devez mettre une image')
      return
    }
    if (product.designation === '') {
      setAlert('Vous dever entrer une designation')
      return
    }
    if (product.refference === '') {
      setAlert('Vous devez entrer une réfference')
      return
    }
    if (product.stock === '') {
      setAlert('Vous devez entrer une quantité en stock')
      return
    } else {
      AddProduct(formData)
      setAlert('Produit ajouter a la base de donées', 'success')
      setProduct({
        designation: '',
        refference: '',
        stock: '',
      })
      setImage('')
      setTimeout(() => window.location.reload(), 2000)
    }
  }

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setProduct({
      ...product,
      [name]: value,
    })
  }
  const handleFile = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  return (
    <form
      className="add_product_form"
      method="POST"
      onSubmit={handleForm}
      encType="multipart/form-data"
    >
      <h2 className="form-title">Ajouter un produit</h2>
      <div className="input-group-form">
        <label for="product_image">
          Ajouter une image <img alt="" />
        </label>
        <input
          onChange={handleFile}
          type="file"
          id="product_image"
          name="image"
          accept="image/png, image/jpeg, image/png"
        />
      </div>
      <div className="input-group-form">
        <input
          name="designation"
          onChange={handleInput}
          type="text"
          id="product_designation"
          placeholder="Entrer la désignation "
        />
      </div>
      <div className="input-group-form">
        <input
          name="refference"
          onChange={handleInput}
          type="text"
          placeholder="Enter la refference"
          id="product_refference"
        />
      </div>
      <div className="input-group-form">
        <input
          name="stock"
          onChange={handleInput}
          type="number"
          placeholder="Enter le stock actuel"
          id="product_stock"
        />
      </div>

      <button className="btn-form-submit" type="submit">
        Ajouter
      </button>
    </form>
  )
}

export default ProductAddForm
