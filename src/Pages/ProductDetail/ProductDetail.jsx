import React, { useState, useEffect } from "react";
import classes from "../ProductDetail/Productdetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

const initialProductState = {
  id: "",
  title: "",
  image: "",
  rating: { rate: 0, count: 0 },
  price: 0,
};
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error fetching product:", err);
      });
  }, [productId]);
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
}

export default ProductDetail;
