import React from "react";
// import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
//import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO</CustomButton>;
      </div>
    </div>
  );
};

//  {
//    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />);
//  }

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

// connect(mapStateToProps);
export default CartDropDown;
