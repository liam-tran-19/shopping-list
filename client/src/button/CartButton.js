import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Header,
  Icon,
  Item,
  Label,
  Menu,
  Popup,
  Segment,
} from "semantic-ui-react";
import { useCartContext } from "../context/CartProvider";

const CartButton = () => {
  // const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, setCartItems } = useCartContext();
  let num = 0;
  cartItems &&
    cartItems.length > 0 &&
    cartItems.map((i) => {
      num += i.quantity;
    });
  console.log(cartItems);

  const handleRemoveProductClicked = (product) => {
    let newCart = [...cartItems];

    newCart = newCart.filter((x) => x.productId !== product.productId);
    setCartItems(newCart);
  };

  const totalPrice = () => {
    let price = 0;
    cartItems.map((i) => {
      price += i.price * i.quantity;
    });
    return price;
  };

  const checkOut = () => {
    let newArr = [];
    cartItems.map((item) => {
      newArr.push({ productId: item.productId, quantity: item.quantity });
    });
    console.log(newArr);
    axios
      .post("/api/orders/", newArr)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCartItems([]);
  };

  return (
    <Popup
      trigger={
        <Menu
          size="huge"
          style={{ backgroundColor: "#003c71" }}
          inverted
          // onClick={}
        >
          <Menu.Item as="a">
            <Icon name="shop" /> Cart
            <Label color="red" floating>
              {num}
            </Label>
          </Menu.Item>
        </Menu>
      }
      position="bottom center"
      hoverable
      flowing
      style={{ overflow: "auto", maxHeight: "60vh" }}
    >
      <div style={{ minWidth: 300 }}>
        {num <= 0 ? (
          <Header as="h4">Your Cart is empty</Header>
        ) : num === 1 ? (
          <Header as="h4">{num} Item in your Cart</Header>
        ) : (
          <Header as="h4">{num} Items in your Cart</Header>
        )}
        {num > 0 && (
          <div>
            <Divider />
            <Segment basic>
              <Item.Group divided>
                {cartItems &&
                  cartItems.map((obj, index) => {
                    return (
                      <Item key={index}>
                        <Item.Content>
                          <Item.Header>{obj.productName}</Item.Header>
                          <Item.Meta>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {" "}
                              <p>Price</p>
                              <div>{obj.price}</div>
                            </div>
                          </Item.Meta>
                          <Item.Meta>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {" "}
                              <p>Quantity</p>
                              <div>{obj.quantity}</div>
                            </div>
                          </Item.Meta>
                          <Item.Extra>
                            <a
                              onClick={() => handleRemoveProductClicked(obj)}
                              style={{ color: "red" }}
                            >
                              Remove
                            </a>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    );
                  })}
              </Item.Group>
              <Divider />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <h4>
                  Total: {""} ${totalPrice()}
                </h4>
              </div>
              <Button color="red" floated="right" onClick={checkOut}>
                Check out
              </Button>
            </Segment>
          </div>
        )}
      </div>
    </Popup>
  );
};

export default CartButton;
