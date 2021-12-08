import { useState } from "react";
import "./App.css";
import CartButton from "./button/CartButton";
import { useProductContext } from "./context/ProductProvider";
import { useCartContext } from "./context/CartProvider";
import ShowProduct from "./ShowProduct";

function App() {
  const [quantity, setQuantity] = useState([]);
  const { products } = useProductContext();
  const { cartItems, setCartItems } = useCartContext();
  console.log(products);
  let options = Array.from(Array(10).keys()).map((x) => {
    return { text: x + 1, value: x + 1 };
  });

  const addToCart = (value) => {
    console.log(value);
    let newCartItems = [...cartItems];
    let index = newCartItems.findIndex((x) => x.productId === value.productId);
    if (index === -1) {
      newCartItems.push(value);
    } else {
      newCartItems[index].quantity += value.quantity;
    }
    setCartItems(newCartItems);
  };
  console.log(cartItems)
  return (
    <div className="App">
      {alert}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <CartButton />
      </div>
      <div class="d-flex justify-content-center">
        <table
          class="table table-bordered table-striped"
          style={{ width: "50%" }}
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quantity</th>
              <th scope="col">Name Of Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <ShowProduct
                    options={options}
                    product={product}
                    callbackAddToCart={addToCart}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
