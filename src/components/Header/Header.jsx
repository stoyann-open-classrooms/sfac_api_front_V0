import './styles/Header.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import RequestContext from '../../context/Request/RequestContext'
import './styles/Header.css'
export default function Header() {
  const [time, setTime] = useState()
  const { requests, loading, fetchRequests } = useContext(RequestContext)

  useEffect(() => {
    fetchRequests()
  }, [])

  useEffect(() => {
    setInterval(() => {
      const timer = new Date()
      setTime(timer.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <>
      <Sidebar />
      <header>
        <div className="header-body">
        <Link to={'/requests'}>
            <div className="header-requests">
              Demandes
              {!loading ? (
                <>
                  <p className="nb">{requests.length}</p>
                </>
              ) : (
                <>
                  <p className='nb'>0</p>
                </>
              )}
            </div>
          </Link>
          <div className="header-title">
            <Link to={'/'}>
              <h1>SFAC dashboard</h1>
            </Link>
          </div>
         
          <div className="header-time">
          <h3>{time}</h3>
        </div>
        </div>
      </header>
    </>
  )
}
