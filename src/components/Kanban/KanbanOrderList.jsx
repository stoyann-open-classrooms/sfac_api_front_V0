
import KanbanOrdersItem from "./KanbanOrderItem";
function KanbanOrdersList({kanban}) {
  
  console.log(kanban);
   
      return (
        <div className="list">
        

     {kanban.demandes.filter((demande) => demande.status === 'Reçue')
          .map((order) => (
            <KanbanOrdersItem key={order.id}  order={order} />
          
          ))}





        </div>
      );
    } 
  

export default KanbanOrdersList