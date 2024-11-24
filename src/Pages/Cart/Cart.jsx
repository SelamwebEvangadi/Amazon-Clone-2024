import React, { useContext } from "react";
import classes from "../Cart/Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <p>Your shopping basket</p>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item) => {
              return (
                <ProductCard
                  product={item}
                  rendDesc={true}
                  flex={true}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
