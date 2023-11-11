import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ProductsGrid } from "./components/ProductsGrid";
import { products as arrayProducts } from "./products";

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProduct(arrayProducts);
  }, []);

  return (
    <div>
      <NavBar products={products} cart={cart} />
      <ProductsGrid products={products} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
