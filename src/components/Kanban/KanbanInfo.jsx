import React from 'react'
import KanbanProduct from './KanbanProduct'
import KanbanStats from './KanbanStats'

function KanbanInfo({kanban}) {

    
  if (!kanban) {
    return <h1>loading...</h1>
  } else {
  return (
    <>
    <KanbanProduct kanban={kanban}/>
<KanbanStats kanban={kanban}/>
    <div className='product-info'>
    <div className="mini-card-info">
        <h3>indentifiant</h3>
        <p className='standart'>{kanban.uid_nfc}</p>
    </div>
    <div className="mini-card_info">
        <h3>Quantité</h3>
        <p className='standart'>{kanban.quantite}</p>
    </div>
</div>
    </>
  )
}
}

export default KanbanInfo