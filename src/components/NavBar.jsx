import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function NavBar({ cart, products }) {
  const [cartToggleOn, setCartToggleOn] = useState(false);

  const cartVisible = () => {
    setCartToggleOn(!cartToggleOn);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const product = products.find((p) => p.id === item.id);
        return total + product.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li>Home</li>
        <li>User</li>
        <li>
          <button onClick={cartVisible}>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
          </button>
          {cartToggleOn && (
            <div className={styles.cartContainer}>
              {cart.length === 0 ? (
                <p>The cart is empty</p>
              ) : (
                <>
                  <ul className={styles.cartList}>
                    {cart.map((item) => {
                      const product = products.find((p) => p.id === item.id);
                      return (
                        <li key={item.id}>
                          {product.title} X {item.quantity} -{" "}
                          {(product.price * item.quantity).toFixed(2)}€
                        </li>
                      );
                    })}
                  </ul>
                  <u>
                    {" "}
                    <p className={styles.total}>
                      <strong>Total: </strong>
                      {getTotalPrice()}€
                    </p>
                  </u>
                </>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
