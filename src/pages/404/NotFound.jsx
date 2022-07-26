import './styles/NotFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className="main-container error-main">
      <hgroup>
        <h1>404</h1>
        <h2>Cette page n'existe pas</h2>
        <Link to={'/'}>
          <button>Retour a l'accueil</button>
        </Link>
      </hgroup>
    </div>
  )
}

export default NotFound
