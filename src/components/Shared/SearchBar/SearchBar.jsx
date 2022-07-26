import './styles/SearchBar.css'
import { useContext } from "react";
// Import des contexts
import SearchContext from "../../../context/Search/searchContext";
import Loupe from '../../Assets/icones/loupe_icone.svg'


function SearchBar({placeholder}) {
  const { getSearch, searchValue } = useContext(SearchContext);

  return (
    <div className="input-group">
    <input
      onChange={getSearch}
      value={searchValue}
      type="text"
      placeholder= {placeholder}
      />
      <img src={Loupe} alt="" />
      </div>
  )
}

export default SearchBar