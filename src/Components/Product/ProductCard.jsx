import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, rendDesc }) {
  const { image, title, id, rating, price, description } = product;
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      } `}
    >
      <Link to={`products/${id}`}>
        <img src={image} alt="" className={classes.img__container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {rendDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* {Rating} */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* {price} */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
