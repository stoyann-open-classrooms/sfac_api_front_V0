
import Dialog from '../Shared/Dialog/Dialog'
import SearchBar from '../Shared/SearchBar/SearchBar'
import AddKanbanForm from '../Kanbans/KanbansAddForm'


function KanbansActions() {
  return (
    <div>

<div className="actions">
        <div className="action-item">
        <Dialog btn={"ajouter"}>
       <AddKanbanForm/>
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

export default KanbansActions