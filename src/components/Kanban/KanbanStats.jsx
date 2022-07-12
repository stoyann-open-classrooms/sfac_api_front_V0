
function KanbanStats({ kanban }) {




  

  const getDays = (commandes) => {
    const arr = []
    commandes.forEach((commande) => {
      if (commande.status === 'Reçue') {

        
      arr.push(
          
          Math.round(
            (new Date(commande.date_livraison) -
              new Date(commande.createdAt).getTime()) /
              (1000 * 3600 * 24),
          ),
        )
      } 
      
      
    })
    console.log(arr);
    return arr;
  }
console.log(getDays(kanban.demandes))

const dayss = getDays(kanban.demandes)

  //   calcul du delai moyen en jour
  let average =
  dayss.reduce((acc, cur) => {
      return acc + cur
    }, 0) / getDays(kanban.demandes).length

  // Calcul jour min et max enregistre
  let dayMax = Math.max(...dayss)
  let dayMin = Math.min(...dayss)

  return (
    <div className="kanban-stats">
      
      <div className="card-recap">
        <h3>Delai</h3>
        {dayMin === Infinity ? ( 

          <h3 className="round green">0</h3>
          
          ) : (

          <h3 className="round green">{dayMin}</h3>
          )}
        <h3>Minimum</h3>
      </div>
      <div className="card-recap">
        <h3>Delai</h3>


        {average ? ( 


<h3 className="round orange">{average.toFixed(1)}</h3>
) : (
<h3 className="round orange">0</h3>

)}
        <h3>Moyen</h3>
      </div>
      <div className="card-recap">
        <h3>Delai</h3>
        
        {dayMax === -Infinity ? ( 


  <h3 className="round red">0</h3>
) : (
        <h3 className="round red">{dayMax}</h3>

)}
        <h3>Maximum</h3>
      </div>
    </div>
  )
}

export default KanbanStats
