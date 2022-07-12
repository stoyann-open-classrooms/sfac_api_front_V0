import React from 'react'
import Dialog from '../Shared/Dialog/Dialog'
import KanbanCover from './KanbanCover'
import KanbanEditForm from './KanbanEditForm'
import './Kanban.css'
import KanbanOrderTable from './KanbanOrderTable'

function KanbanHeader({kanban}) {
  console.log(kanban.data);
    if (!kanban.data) {
        return (
            <h1>loading...</h1>
        
        );
      } else {
    return (
    <div>
        {kanban.data.produitId === null ? ( 
            <div className='kanban-noProduct'>
            <h2>Ce kanban n'a  aucun produit associée</h2>
            <Dialog btn={"ajouter un produit"}>
            <KanbanEditForm/>
            </Dialog>
            </div>
        ) : (
            <>
            <KanbanCover kanban={kanban.data}/>
        
            <h2 className='big-title'>Historique des commandes</h2>

            <KanbanOrderTable kanban={kanban.data}/>
            </>
        )}


      
    </div>
  )
}}

export default KanbanHeader