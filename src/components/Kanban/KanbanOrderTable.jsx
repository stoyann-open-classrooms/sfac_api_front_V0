
import { Link } from 'react-router-dom'
function KanbanOrderTable({ kanban }) {
  console.log(kanban.demandes)


const result  =
  kanban.demandes.sort((a,b) => {
    return b.id - a.id
  })
console.log(result);
console.log(result);
  return (
    <>
      <h2 className="big-title ">Historique des demandes</h2>
      <table>
        <thead>
          <tr>
            <th>identifiant</th>
            <th>Date demande</th>
            <th>Date remplissage</th>
            <th>Délai</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {result
            .filter((demande) => demande.status === 'Archivé')

            .map((order) => (
              <tr key={order.id} order={order}>
                <td>D{order.id}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{new Date(order.date_archive).toLocaleDateString()}</td>
                <td>
                  {' '}
                  {Math.round(
                    (new Date(order.date_archive) -
                      new Date(order.createdAt).getTime()) /
                      (1000 * 3600 * 24),
                  )}{' '}
                  jours
                </td>
                <td>{order.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default KanbanOrderTable
