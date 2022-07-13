import React from 'react'
import KanbansActions from '../../components/Kanbans/KanbansActions'
import KanbansList from '../../components/Kanbans/KanbansList'
import Alert from '../../components/Shared/Alert/Alert'

function Kanbans() {
  return (
    <div className='main-container'>
      <h1 className="big-title">Kanbans</h1>
      <Alert/>    
       <KanbansActions/>
      <KanbansList/>
    </div>
  )
}

export default Kanbans