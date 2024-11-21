import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* {Rating} */}
            <Rating value={rating.rate} precision={0.1} />
            {/* count */}
            <small>{rating.count}</small>
          </div>
          <div>
            {/* {price} */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
