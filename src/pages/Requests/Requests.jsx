import { useContext, useEffect } from 'react'
import RequestContext from '../../context/Request/RequestContext'
import Alert from '../../components/Shared/Alert/Alert'
import './styles/Requests.css'
import RequestsList from '../../components/Requests/RequestsList/RequestsList'

function Requests() {
  const { requests, loading, fetchRequests } = useContext(RequestContext)

  useEffect(() => {
    fetchRequests()
  }, [])

  console.log(requests)
  return (
    <div className="main-container">
      <h1 className="big-title">Demande à traiter</h1>
      <Alert />
      <RequestsList requests={requests} />
    </div>
  )
}

export default Requests
