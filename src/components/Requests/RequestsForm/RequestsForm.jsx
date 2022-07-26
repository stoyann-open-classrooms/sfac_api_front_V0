import { useState } from 'react'
import axios from 'axios'
import Button from '../../Shared/Button/Button'
import { useContext } from 'react'
import AlertContext from '../../../context/Alerte/AlerteContext'
import { Link } from 'react-router-dom'

function RequestsForm({ request }) {
  const { setAlert } = useContext(AlertContext)

  const [updateRequest, setUpdateRequest] = useState({
    status: 'Archivé',
    date_archive: Date.now(),
  })
  const [stock, setStock] = useState({
    stock: request.kanban.produit.stock - request.kanban.quantite,
  })
  const newStock = request.kanban.produit.stock - request.kanban.quantite
  const handleForm = (e) => {
    e.preventDefault()

    axios.put(
      `http://localhost:5000/sfac/api/demande/${request.id}`,
      updateRequest,
    )
    axios.put(
      `http://localhost:5000/sfac/api/produit/${request.kanban.produitId}`,
      stock,
    )
    setAlert('kanban rechargée avec succés', 'success')
    setTimeout(() => window.location.reload(), 2000)
  }
  console.log(typeof newStock)
  if (!request) {
    return <h1> chargement ...</h1>
  } else {
    return (
      <form className="add_product_form" onSubmit={handleForm}>
        {newStock < 0 ? (
          <>
            <div className="form-info">
              <h3 className="danger">
                Le stock est insuffisant pour remplir le kanban.
              </h3>
              <h4>
                Ce produit semble être en rupture de stock Vous devez passer une
                commande
              </h4>
            </div>
            <div className="form-group">
              <Link to={`/product/${request.kanban.produitId}`}>
                <Button type="submit" version={'primary'}>
                  Valider
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="form-info">
              <h3 className="success">
                Le stock est suffisant pour remplir le kanban.
              </h3>
              <h4 className='form-info'>
                {' '}
                <span className='nb-info danger'>{request.kanban.quantite} </span>
                unités seront déduites du stock après
                validation
              </h4>
              <p className='form-info'>
                {' '}
                Stock aprés remplissage{' '}
                <span className='nb-info success'>
                  {' '}
                  {request.kanban.produit.stock - request.kanban.quantite}
                </span>
              </p>
            </div>

            <div className="form-group">
              <Button type="submit" version={'primary'}>
                Valider
              </Button>
            </div>
          </>
        )}
      </form>
    )
  }
}

export default RequestsForm
