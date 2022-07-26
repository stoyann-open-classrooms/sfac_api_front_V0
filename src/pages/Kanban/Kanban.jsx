import { useContext , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import KanbanInfo from '../../components/Kanban/KanbanInfo'
import KanbanContext from '../../context/Kanban/KanbanContext'
import './styles/Kanban.css'
import Dialog from '../../components/Shared/Dialog/Dialog'
import KanbanOrderTable from '../../components/Kanban/KanbanOrderTable'

function Kanban() {
  const params = useParams()
  const { getKanban, kanban, loading } = useContext(KanbanContext)
  
  useEffect(() => {
    getKanban(params.id)
  },[])
  console.log(kanban);

  if (!kanban.data) {
    return <h1> chargement ...</h1>
  } else {
  return (
    <div className="main-container">
      <h1 className="big-title"> kanban {kanban.data.uid_nfc}</h1>
 
   

   {kanban.data.produitId === null ? (
          <div className="kanban-noProduct">
            <h2 className='danger'>Ce kanban n'a aucun produit associée</h2>
            <Dialog btn={'ajouter un produit'}>
           <div>test</div>
            </Dialog>
          </div>
        ) : (
          <>
     
         

     <KanbanInfo kanban={kanban.data}/>
     <KanbanOrderTable kanban={kanban.data} />
 
    
           
          </>
        )}
    </div>
  )
}
}
export default Kanban
