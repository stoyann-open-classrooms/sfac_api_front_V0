import React from 'react'
import { useContext, useEffect } from "react";
import ProductContext from "../../context/Product/ProductContext";
import SearchContext from "../../context/Search/searchContext";
import Alert from '../Shared/Alert/Alert';
import ProductsItem from "./ProductsItem";

function ProductsList() {
    const { products, loading, fetchProducts } = useContext(ProductContext);
    const { searchValue } = useContext(SearchContext);
  

    
  useEffect(() => {
    fetchProducts();
  }, []);
  

  if (loading) {
    return (
        <h1>loading...</h1>
    
    );
  } else {
    return (
  

     <div>
      <Alert/>
<h3 className='days-unt'>Produits en base de donées <span>{products.length}  </span> </h3>
        <div className="list">
        {products
          .filter((val) => {
            if (searchValue === "") {
              return val;
            } else if (
              val.designation
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
                val.refference.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <ProductsItem key={product.id} product={product} />
                ))}
      </div>
                </div> 
    );
  }
}

export default ProductsList