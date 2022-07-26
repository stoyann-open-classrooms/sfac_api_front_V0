import './styles/Products.css'
import { useContext, useEffect } from "react";
import ProductContext from "../../context/Product/ProductContext";
import ProductsActions from '../../components/Products/ProductsActions/ProductsAction';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import Alert from '../../components/Shared/Alert/Alert';



function Products() {
  const { products, loading, fetchProducts } = useContext(ProductContext);
 
    
  useEffect(() => {
    fetchProducts();
  }, []);

 
 
  if (loading) {
    return (
        <h1>loading...</h1>
    
    );
  } else {
  return (
    <div className="main-container">
      <h1 className="big-title">Produits</h1>
      <Alert/>
      
      <ProductsActions/>
      <ProductsList products={products}/>
    
    </div>
  )
}}

export default Products
