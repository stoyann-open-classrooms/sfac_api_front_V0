import { useContext } from 'react'
import SearchContext from '../../../context/Search/searchContext'
import Dialog from '../../Shared/Dialog/Dialog'
import KanbansAddForm from '../KanbansAddForm/KanbansAddForm'
import KanbansItem from '../KanbansItem/KanbansItem'

function KanbansList({ kanbans }) {
  const { searchValue } = useContext(SearchContext)

  if (!kanbans) {
    return <h1>loading...</h1>
  } else {
    return (
      <div>
        <div className="info-list">
          <h3>
            Kanbans en base de donées{' '}
            <span className="nb-info danger">{kanbans.length} </span>{' '}
          </h3>
          <Dialog  btn={'ajouter'}>
           <KanbansAddForm/>
          </Dialog>
        </div>
        <section className="list">
          {kanbans
            .filter((val) => {
        
              if (searchValue === '') {
                return val
              } else if (
                
                val.uid_nfc.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return val
              }
            })
            .map((kanban) => (
              <KanbansItem key={kanban.id} kanban={kanban} />
            ))}
        </section>
      </div>
    )
  }
}

export default KanbansList
