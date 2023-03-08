import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productAction";

import ProductCard from "./ProductCard";
import "./product.css";
import Addproduct from "./Addproduct";


const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productReducer);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <Addproduct></Addproduct>
      <div className="title">
        <h1>Products</h1>
      </div>

      {loading ? (
        <h1> loading... </h1>
      ) : (
        <div className="list">
          {products&&products.map((el, i) => (
            <ProductCard product={el} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
