import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { db } from "../../firebase";
import "./Edit.scss";
const Edit = () => {
  const { id, value, stock } = useParams();
  console.log(value, stock);
  const [editProduct, setEditProduct] = useState({
    product: value,
    stock: stock,
  });

  const navigate = useNavigate();

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    console.log(id);
    console.log(product.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = editProduct;
    await updateDoc(product, data);
    console.log(data);
    navigate("/");
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center form-container">
          <h1 className="title-edit" style={{color:'white'}} >Edit Product</h1>
          <form className="form" onSubmit={handleSumbit}>
            <input
              type="text"
              className="form-control text-center"
              placeholder=" Product"
              value={editProduct.product}
              name="product"
              onChange={handleChange}
            />

            <input
              type="number"
              className="form-control text-center"
              placeholder="Nro de stock"
              value={editProduct.stock}
              name="stock"
              onChange={handleChange}
            />

            <ButtonGroup variant="outline">
              <Button type="sumbit" style={{backgroundColor:'#9fd3c7' ,color:'black'}} >
                Update Product
              </Button>
            </ButtonGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
