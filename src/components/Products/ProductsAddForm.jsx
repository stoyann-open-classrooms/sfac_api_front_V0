import { useState } from "react";
import don from '../Assets/upload_icone.png'
import axios from "axios";
function ProductAddForm() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const formData = new FormData();
  formData.append("image", image);
  formData.append("designation", product.designation);
  formData.append("refference", product.refference);
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/sfac/api/produit/addProduit", formData);
    window.location.reload();
    console.log("submit !");
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <form
      className="add_product_form"
      method="POST"
      onSubmit={handleForm}
      encType="multipart/form-data"
    >
      <h2>Ajouter un produit</h2>
      <div className="input-group">
      <label for="product_image" class="custom-file-upload">
    Ajouter une image <img src={don} alt="" />
</label>
        <input 
        className="input-files"
          onChange={handleFile}
          type="file"
          id="product_image"
          name="image"
          accept="image/png, image/jpeg, image/png"
        />
      </div>
      <div className="input-group">
        <input
          name="designation"
          onChange={handleInput}
          type="text"
          id="product_designation"
          placeholder="Entrer la désignation "
        />
      </div>
      <div className="input-group">
        <input
          name="refference"
          onChange={handleInput}
          type="text"
          placeholder="Enter la refference"
          id="product_refference"
        />
      </div>

      <button className="btn-form-submit" type="submit">
        Ajouter
      </button>
    </form>
  );
}

export default ProductAddForm;
