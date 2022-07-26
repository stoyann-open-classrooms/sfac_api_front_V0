import Dialog from '../../Shared/Dialog/Dialog'
import RequestsItem from '../RequestsItem/RequestsItem'

function RequestsList({ requests }) {
  if (!requests) {
    return <h1>loading...</h1>
  } else {
    return (

        <div>
        <div className="info-list">
          <h3>
           Demandes à traiter{' '}
            <span className="nb-info danger">{requests.length} </span>{' '}
          </h3>
      
        </div>
        <section className="list">
          {requests.map((request) => (
              <RequestsItem  key={request.id} request={request} />
            ))}
        </section>
      </div>
    )
  }
}

export default RequestsList
