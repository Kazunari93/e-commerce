import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishAPIKey =
    "pk_test_51HEYjvDdlT9KPRjjAFr6mUbFyOUB5XrPFoX9iRAfPBKWtEglwAaHqs475Mx9r6lF0xtTVgJzdzCK8ji3he6yzgVU00J8JBIquY";

  const onToken = (token) => {
    alert("Success");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishAPIKey}
    />
  );
};

export default StripeButton;
