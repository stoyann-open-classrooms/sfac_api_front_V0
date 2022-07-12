import React from 'react'
import { useContext, useEffect } from "react";
import KanbanContext from "../../context/Kanban/KanbanContext";
import SearchContext from "../../context/Search/searchContext";

import ProductsItem from "./KanbansItem";

function KanbansList() {
    const { kanbans, loading, fetchKanbans } = useContext(KanbanContext);
    const { searchValue } = useContext(SearchContext);
  

    
  useEffect(() => {
    fetchKanbans();
  }, []);
  

  if (loading) {
    return (
        <h1>loading...</h1>
    
    );
  } else {
    return (
        <div className="list">
    
          
        {kanbans
          .filter((val) => {
            if (searchValue === "") {
              return val;
            } else if (
              val.uid_nfc
                .toLowerCase()
                .includes(searchValue.toLowerCase()) 
            ) {
              return val;
            }
          })
          .map((kanban) => (
            <ProductsItem key={kanban.id} kanban={kanban} />
          ))}
      </div>
    );
  }
}

export default KanbansList