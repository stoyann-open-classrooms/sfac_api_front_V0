
import SearchBar from "../../Shared/SearchBar/SearchBar"

function KanbansActions() {
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

export default KanbansActions
