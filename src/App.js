import "./App.css";
import CartSection from "./app/components/CartSection";
import Navbar from "./app/components/Navbar";
import ProductList from "./app/page/ProductList";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className="App">
      <Navbar />
      <div className="productlist">
        <ProductList />
      </div>
      {showCart ? (
        <div className="cart-container">
          <CartSection />
        </div>
      ) : null}
    </div>
  );
}

export default App;
