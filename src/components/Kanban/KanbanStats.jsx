
function KanbanStats({ kanban }) {
 
 console.log(kanban);
    let beetween = []
    let lastDate = ''
    const getDates = (demandes) => {
      const arr = []
      demandes.forEach((demande) => {
        if (demande.status === 'Archivé') {
          arr.push(demande.createdAt)
        }
      })
  
      return arr
    }
    
   
       const days = getDates(kanban.demandes).sort((a,b) => {
         return b.id - a.id
       })
   
  
    for (let i = 0; i < days.length; i++) {
      if (lastDate === '') {
        console.log('no')
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
  console.log(new Date(lastDate));
    let average =
      beetween.reduce((acc, cur) => {
        return acc + cur
      }, 0) / beetween.length
  
    // Calcul jour min et max enregistre
    let dayMax = Math.max(...beetween)
    let dayMin = Math.min(...beetween)
    let nbKanban = kanban.produit.stock / kanban.quantite
    let lastRequest = Math.round((Date.now() - new Date(lastDate).getTime()) / (1000 * 3600 * 24))
   
    
    let beforeRupture = nbKanban * average
    
  if (kanban.commandes) {
    return <h1>loading...</h1>
  } else {
    return (
      <>
        
          { lastRequest === 0  ? (
            <p className='danger'>
            Le kanban a ete rechargée aujourd'hui
        </p>
          ): (
  <p className='danger'> Le kanban a ete rechargée il y'a {lastRequest} jours</p>
          )}
          
         
        <div className="product-stats">
          <div className="card-stats">
            <h3>Dérniere </h3>
            {lastDate === Infinity ? (
              <h3 className="standart">0</h3>
            ) : (
              <h3 className="success">
                {new Date(lastDate).toLocaleDateString()}
              </h3>
            )}
            <h3>demande</h3>
          </div>
          <div className="card-stats">
            <h3>Délai moyen </h3>
            {dayMin === Infinity ? (
              <h3 className="round green">0</h3>
            ) : (
              <h3 className="success">
                {average.toFixed(1)}
              </h3>
            )}
            <h3>entre les demande</h3>
          </div>
          <div className="card-stats">
            <h3>Démande</h3>
            {nbKanban === Infinity ? (
              <h3 className="round green">0</h3>
            ) : (
              <h3 className="success">
                {nbKanban.toFixed(1)}
              </h3>
            )}
            <h3>avant rupture</h3>
          </div>
          <div className="card-stats">
            <h3>Rupture dans</h3>
            {dayMin === Infinity ? (
              <h3 className="round green">0</h3>
            ) : (
              <h3 className="success">
                {beforeRupture.toFixed(1)}
              </h3>
            )}
            <h3>jours</h3>
          </div>
          </div>
          
        
      </>
    )
}
}

export default KanbanStats
