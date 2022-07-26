import  {Link} from 'react-router-dom'
function KanbanProduct({kanban}) {
  return (
    <div className='kanban-product'>
       {kanban.produitId ? (
        <>
        <div className="kanban-product-title">
        <h3>{kanban.produit.designation}</h3>
        </div>
        <Link to={`/product/${kanban.produitId}`}>
        <div className="kanban-product-refference">
        <h3 className='standart'>{kanban.produit.refference}</h3>
        </div>
        </Link>
        </>

       ): ( <div className='warning'>Ce Kanban n'a pas de produit associé.</div> )}
    </div>
  )
}

export default KanbanProduct