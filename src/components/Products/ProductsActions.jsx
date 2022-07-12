import React from 'react'
import Dialog from '../Shared/Dialog/Dialog'
import SearchBar from '../Shared/SearchBar/SearchBar'
import ProductAddForm from './ProductsAddForm'

function ProductsActions() {
  return (
    <div>

<div className="actions">
        <div className="action-item">
       <Dialog btn={"Ajouter"}>
       <ProductAddForm/>
       </Dialog>
        </div>
        
        <div className="input-group">
        <SearchBar placeholder={"rechercher par désignation ou refference"}>
        </SearchBar>
        </div>
      </div>


    </div>
  )
}

export default ProductsActions