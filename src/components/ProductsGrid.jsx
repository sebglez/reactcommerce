import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductsGrid.module.css";

export const ProductsGrid = ({ products, cart, setCart }) => {
  const [cartVisible, setCartVisible] = useState(false);
  // Creamos un estado para manejar el contador de cada producto
  const addToCart = (productId) => {
    const foundItem = cart.find((item) => {
      return productId === item.id;
    });
    if (!foundItem) {
      //...cart devuelve todo lo que habia en la array del carrito
      setCart([...cart, { id: productId, quantity: 1 }]);
    } else {
      //con cart.filter filtramos todos los productos que cumplen las condiciones
      const filterItem = cart.filter((item) => {
        return productId !== item.id;
      });

      // agregamos de nuevo el producto que no ha sido filtrado con la cantidad de +1
      setCart([
        ...filterItem,
        { id: productId, quantity: foundItem.quantity + 1 },
      ]);
    }
    setCartVisible(true);
  };
  console.log(cart);

  return (
    <div className={styles.productsGrid}>
      {products.length > 0 &&
        products.map((product) => (
          <div className={styles.productStyle} key={product.id}>
            <h3 className={styles.title}>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
              width={185}
            />
            <div className={styles.bottomCard}>
              <div className={styles.counter}>
                <button className={styles.removeClick}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
                <p> X</p>
                <button className={styles.addClick}>
                  <FontAwesomeIcon icon={faCaretUp} />
                </button>
                <p className={styles.price}>{product.price}€</p>
                <button
                  className={styles.buttonBuy}
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
