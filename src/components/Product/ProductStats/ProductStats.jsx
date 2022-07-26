import { Link } from 'react-router-dom'
import Dialog from '../../Shared/Dialog/Dialog'
import ProductAddOrder from '../ProductAddOrder/ProductAddOrder'

function ProductStats({ product }) {
  const getDays = (commandes) => {
    const arr = []
    commandes.forEach((commande) => {
      if (commande.status === 'Reçue') {
        arr.push(
          Math.round(
            (new Date(commande.date_livraison) -
              new Date(commande.date_commande).getTime()) /
              (1000 * 3600 * 24),
          ),
        )
      }
    })

    return arr
  }

  const dayss = getDays(product.commandes)
  console.log(dayss)
  //   calcul du delai moyen en jour
  let average =
    dayss.reduce((acc, cur) => {
      return acc + cur
    }, 0) / getDays(product.commandes).length

  // Calcul jour min et max enregistre
  let dayMax = Math.max(...dayss)
  let dayMin = Math.min(...dayss)

  let orderEnCours = product.commandes.filter(
    (commande) => commande.archive === false,
  )

  console.log(orderEnCours)
  // ===================================
  let beetween = []
  let lastDate = ''
  const getDates = (demandes) => {
    const arr = []
    demandes.forEach((demande) => {
      if (demande.status === 'Archivé') {
        arr.push(demande.createdAt)
      }
    })
    return arr.reverse()
  }
  const days = getDates(product.kanban.demandes).reverse()

  for (let i = 0; i < days.length; i++) {
    if (lastDate === '') {
    } else {
      console.log(days[i])
      beetween.push(
        Math.round(
          (new Date(days[i]) - new Date(lastDate).getTime()) /
            (1000 * 3600 * 24),
        ),
      )
    }
    lastDate = days[i]
  }

  let average2 =
    beetween.reduce((acc, cur) => {
      return acc + cur
    }, 0) / beetween.length

  let nbKanban = product.stock / product.kanban.quantite


  let beforeRupture = average2 * nbKanban - average
  console.log(beforeRupture)
  function addDaysToDate(date, days) {
    let res = new Date(date)
    res.setDate(res.getDate() + days)
    return res
  }

  return (
    <>
      {orderEnCours
        ? product.commandes
            .filter((commande) => commande.archive === false)
            .map((commande) => (
              <>
                <Link to={`/order/${commande.id}`}>
                  <p className="success">commande en cours</p>
                </Link>

                <p key={commande.id} className="warning">
                  La livraison de la commande en cours est éstimer au
                  <span>
                    {new Date(
                      addDaysToDate(new Date(commande.date_commande), average),
                    ).toLocaleDateString()}
                  </span>
                </p>
              </>
            ))
        : 
        ('')
        
        }

       
 <div className="product-helper">
  
        <p>Passez commande avant le
        <span className='danger'>{new Date(addDaysToDate(Date.now(), beforeRupture)).toLocaleDateString()}</span>
      pour éviter la rupture de stock
        </p>
        
      </div>
      <div className="product-stats">
        <div className="card-stats">
          <h3>Delai Minimum</h3>
          {dayMin === Infinity ? (
            <h3 className="standart">0</h3>
          ) : (
            <h3 className="success">{dayMin}</h3>
          )}
        </div>
        <div className="card-stats">
          <h3>Delai Moyen</h3>
          {average === Infinity ? (
            <h3 className="standart">0</h3>
          ) : (
            <h3 className="warning">{average.toFixed(1)}</h3>
          )}
        </div>
        <div className="card-stats">
          <h3>Delai Maximum</h3>

          {dayMax === -Infinity ? (
            <h3 className="standart">0</h3>
          ) : (
            <h3 className="danger">{dayMax}</h3>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductStats
