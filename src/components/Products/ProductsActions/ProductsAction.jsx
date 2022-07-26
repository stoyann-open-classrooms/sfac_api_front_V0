import './styles/ProductsAction.css'
import SearchBar from '../../Shared/SearchBar/SearchBar'

function ProductsActions() {
  return (
    <div>
      <div className="actions">
        <SearchBar
          placeholder={'rechercher par désignation ou refference'}
        ></SearchBar>
      </div>
    </div>
  )
}

export default ProductsActions
