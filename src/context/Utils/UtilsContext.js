import { createContext ,useReducer } from "react";
import UtilsReducer from './UtilsReducer'

const UtilsContext = createContext()

export const UtilsProvider  = ({children}) => {
    const initialState = {
       orderStats: {},
    }

    const [state, dispatch] = useReducer( UtilsReducer, initialState)


// construit un objet contenant les statistiques des commandes
// const getOrdersStats = (commandes) => {
//     const arr = []
//     commandes.forEach((commande) => {
//       if (commande.status === 'Reçue') {
//         arr.push(
//           Math.round(
//             (new Date(commande.date_livraison) -
//               new Date(commande.date_commande).getTime()) /
//               (1000 * 3600 * 24),
//           ),
//         )
//       }
    
//     })
//     let average =
//     arr.reduce((acc, cur) => {
//       return acc + cur
//     }, 0) / arr.length
//     let dayMax = Math.max(...arr)
//     let dayMin = Math.min(...arr)
//     let orderEnCours = commandes.filter((commande) => commande.archive === false)
//     return {
//         average : average.toFixed(1),
//         dayMax: dayMax,
//         dayMin: dayMin,
//         orderEnCours : orderEnCours
//     }
//   }

  const getDates = (commandes) => {
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





// retourne la date en premmier argument plus le nombre dejours placer en second argument

  const addDaysToDate = (date, days) => {
    let res = new Date(date);
    res.setDate(res.getDate() + days);
    
    return  res
  }
  
  
  // moyenne des chiffres du tableau en argument
  const getAverage = (arr) => {
   let res = []
   res = arr.reduce((acc, cur) => {
      return acc + cur
    }, 0) / arr.length
    
    return  res
  }


    return <UtilsContext.Provider value={{ getDates, addDaysToDate , getAverage }}>
        {children}
    </UtilsContext.Provider>
}

export default UtilsContext