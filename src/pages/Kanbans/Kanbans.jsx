import React from 'react'
import KanbansActions from '../../components/Kanbans/KanbansActions'
import KanbansList from '../../components/Kanbans/KanbansList'

function Kanbans() {
  return (
    <div className='main-container'>
      <h1 className="big-title">Kanbans</h1>
     <KanbansActions/>
      <KanbansList/>
    </div>
  )
}

export default Kanbans