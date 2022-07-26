import { useContext, useEffect } from "react";
import KanbansList from "../../components/Kanbans/KanbansList/KanbansList";
import ProductsActions from "../../components/Products/ProductsActions/ProductsAction";

import Alert from '../../components/Shared/Alert/Alert'
import KanbanContext from '../../context/Kanban/KanbanContext'
import './styles/Kanbans.css'
function Kanbans() {

  const { kanbans, loading, fetchKanbans } = useContext(KanbanContext);


  useEffect(() => {
    fetchKanbans();
  }, []);
console.log(kanbans);


if (loading) {
  return (
      <h1>loading...</h1>
  
  );
} else {
  return (
    <div className="main-container">
      <h1 className="big-title">Kanbans</h1>
      <Alert/>
      <ProductsActions/>
      <KanbansList kanbans={kanbans}/>
    </div>
  )
}
}
export default Kanbans
