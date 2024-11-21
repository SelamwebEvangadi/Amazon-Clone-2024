import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "../Product/Product.module.css";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  return (
    <section className={classes.products__container}>
      {products.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
}

export default Product;
