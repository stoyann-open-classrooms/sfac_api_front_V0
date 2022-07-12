import React from 'react'
import './Kanban.css'
import KanbanStats from './KanbanStats'

function KanbanCover({kanban}) {
 
console.log(kanban);
    return (
      <>
      <h1 className='big-title'>Kanban {kanban.uid_nfc}</h1>
      <div className='kanban-cover'>
        <div className="kanban-cover-image">
            
            <img  src={"http://localhost:9000/" + kanban.produit.image} alt= {kanban.produit.designation} />
        </div>
        <div className="kanban-cover-body">
<h3>{kanban.produit.designation}</h3>
<div className="cover-body-item">
<h3 className='red-title'>Refference :</h3>
<h3>{kanban.produit.refference}</h3>
</div>
        <KanbanStats kanban={kanban}/>
        </div> 
   
        
        </div>
      </>
  )

}

export default KanbanCover