import { useContext, useEffect } from "react";
import RequestContext from "../../context/Request/RequestContext";
import RequestsItem from "./RequestsItem";

function RequestsList() {
  const { requests, loading, fetchRequests } = useContext(RequestContext);

  useEffect(() => {
    fetchRequests();
  }, []);

  if(requests.length === 0) {
    return <h1 className="big-title">Aucune demandes à traiter</h1>;

  }
  if (!loading) {
    return (
      <div className="list">
        {requests.map((request) => (
          <RequestsItem key={request.id} request={request} />
        ))}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default RequestsList;
