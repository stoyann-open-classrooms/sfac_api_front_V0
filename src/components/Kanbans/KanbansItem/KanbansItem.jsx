import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from '../../Shared/Card/Card'
import KanbanContext from '../../../context/Kanban/KanbanContext'

function KanbansItem({ kanban }) {
  const { deleteKanban } = useContext(KanbanContext)

  return (
    <Card item={kanban} image={kanban.produitId ? (`${kanban.produit.image}`) : ('')}>
      <h3 className="card-title">Kanban {kanban.uid_nfc}</h3>
      {kanban.produitId ? (
      <h4 className='card-subtitle'>{kanban.produit.designation}</h4>

      ): ('')} 
      <div className="card-info">
        {kanban.produitId ? (
          <>
            <div className="mini-card">
              <h3>Réfference</h3>
              <p className="refference">{kanban.produit.refference}</p>
            </div>
            <div className="mini-card">
              <h3>Quantité</h3>
              <p className="refference">{kanban.quantite}</p>
            </div>
          </>
        ) : (
          <div className="mini-card">
            <h3 className="danger">Aucun Produit</h3>
          </div>
        )}
      </div>

      <button onClick={() => deleteKanban(kanban.id)} className="close">
        <FaTimes color="red" />
      </button>
      <Link to={`/kanban/${kanban.id}`}>
        <button className="edit">
          <FaEdit color="red" />
        </button>
      </Link>
    </Card>
  )
}

export default KanbansItem
