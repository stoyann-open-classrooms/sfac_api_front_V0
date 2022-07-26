import { useState } from 'react'
import axios from 'axios'
import Button from '../../Shared/Button/Button'
import { useContext } from 'react'
import AlertContext from '../../../context/Alerte/AlerteContext'

function ProductAddOrder({ productId }) {
  const { setAlert } = useContext(AlertContext)

  const [order, setOrder] = useState({
    produitId: productId,
    status: 'Fournisseur',
    date_commande: '',
    num_commande: '',
    quantite_commande: '',
    
   
  })

  const handleForm = (e) => {
    e.preventDefault()
    if (order.date_commande === '') {
      setAlert('Vous devez entrer une date', 'error')
      return
    }
    if (order.num_commande === '') {
      setAlert('Vous dever entrer un numéro de commande', 'error')
      return
    }
    if (order.quantite_commande === '') {
      setAlert('Vous devez entrer une quantité à la  commande', 'error')
      return
    } 
    else {
     

      e.preventDefault()
      axios.post(`http://localhost:5000/sfac/api/commande/addCommande`, order)

      setAlert('La commande a bien ete créer', 'success')

      setTimeout(() => window.location.reload(), 2000)

      setOrder({
    produitId: productId,
    status: 'Fournisseur',
    date_commande: '',
    num_commande: '',
    quantite_commande: '',
    
      })
    }
  }
  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setOrder({
      ...order,
      [name]: value,
    })
  }
  return (
      <form className="add_product_form" onSubmit={handleForm}>
      <div className="input-group">
          <label htmlFor="date_commande">Date de commande</label>
        <input
          onChange={handleInput}
          id="date_commande"
          type="date"
          name="date_commande"
          value={order.date_commande}
        />
      </div>
      <div className="input-group">
        <input
          onChange={handleInput}
          type="number"
          placeholder="Quantité commande"
          id="quantite_commande"
          name="quantite_commande"
          value={order.quantite_commande}
        />
      </div>
      <div className="input-group">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Numéro de commande"
          id="num_commande"
          name="num_commande"
          value={order.num_commande}
        />
      </div>
    
    
      <div className="form-group">
        <Button className="btn-form-submit" type="submit" version={'secondary'}>
          Valider
        </Button>
      </div>
    </form>
  )
}

export default ProductAddOrder
