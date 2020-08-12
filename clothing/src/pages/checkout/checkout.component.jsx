import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span> TOTAL : ${total}</span>
      </div>
      <div className="test-warning">
        テスト用のクレジットカード番号
        <br />
        4242 4242 4242 4242 月日: 08/31 CVC: 123
      </div>
      <div className="button">
        <StripeButton price={total} />
      </div>
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateProps)(CheckoutPage);
