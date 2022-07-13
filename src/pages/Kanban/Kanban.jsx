import { useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import KanbanHeader from '../../components/Kanban/KanbanHeader'
import KanbanContext from '../../context//Kanban/KanbanContext'

function Kanban() {
  const { getKanban, kanban, loading } = useContext(KanbanContext)
  

  const params = useParams()
  useEffect(() => {
    getKanban(params.id)
   
  }, [])

if(loading) {
  return <h1> chargement ...</h1>
} else {

  return (
    <div className='main-container'>
    <KanbanHeader kanban={kanban}/>


    </div>
  )
}
}

export default Kanban