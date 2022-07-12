import React from 'react'
import RequestsList from '../../components/Requests/RequestsList'

function Requests() {
  return (
    <div className='main-container'>
      <h1 className='big-title'>demande à traiter</h1>
      <RequestsList/>
    </div>
  )
}

export default Requests