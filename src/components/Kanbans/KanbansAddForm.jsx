import { useState, useEffect, useContext } from "react";
import ProductContext from "../../context/Product/ProductContext";
import AlertContext from "../../context/Alerte/AlerteContext";
import axios from "axios";

function KanbansAddForm() {
  const [kanban, setKanban] = useState({});
  const { products, loading, fetchProducts } = useContext(ProductContext);
  const {setAlert} = useContext(AlertContext)

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(kanban);
    axios.post("http://localhost:9000/sfac/api/kanban/addKanban", kanban);
    
    setTimeout(() => window.location.reload(), 2000)
    setAlert(`Le  kanban a été ajouté avec succès`, 'error')
  };

 

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setKanban({
      ...kanban,
      [name]: value,
    });
  };
  return (
    <form
      className="add_product_form"
      method="POST"
      onSubmit={handleForm}
      encType="multipart/form-data"
    >
      
      <h3 className="title-card">Ajouter un kanban</h3>

      {!loading ? (
        <>
          <div className="input-group">
            <input
              onChange={handleInput}
              type="text"
              name="uid_nfc"
              placeholder="Identifiant kanban"
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleInput}
              type="number"
              name="quantite"
              placeholder="Quantité par kanban"
            />
          </div>
          <div className="input-group">
            <div className="custom-select" >

            <select onChange={handleInput} name="produitId" id="">
             <option value="">Choisir un produit</option>
              {products.map((item) => (
                <option
                name="produitId"
                value={item.id}
                key={item.id}
                item={item}
                >
                  {item.refference} <span>{item.designation}</span>
                </option>
              ))}
            </select>
              </div>
          </div>

          <div className="form-group">
            <button className="btn-form-submit" type="submit">
              Ajouter
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );
}

export default KanbansAddForm