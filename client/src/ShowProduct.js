import React, { useState } from "react";
import { Button, Dropdown } from "semantic-ui-react";

const ShowProduct = ({ options, product, callbackAddToCart }) => {
  const [quantity, setQuantity] = useState();

  const handleAddProductToCartClicked = (name) => {
      if (!quantity) return alert("please choose quantity")
    let item = {
      productId: name._id,
      productName: name.productName,
      price: name.price,
      quantity: quantity,
    };
    callbackAddToCart(item);
  };

  return (
    <tr>
      <th scope="col">
        <Button
          style={{
            backgroundColor: "#003c71",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={() => handleAddProductToCartClicked(product)}
        >
          Add To Cart
        </Button>
      </th>

      <th scope="col">
        <Dropdown
          fluid
          scrolling
          // value={value}
          options={options}
          onChange={(e, { value }) => setQuantity(value)}
        />
      </th>
      <th scope="col">{product.productName}</th>
      <th scope="col">${product.price}</th>
    </tr>
  );
};

export default ShowProduct;
