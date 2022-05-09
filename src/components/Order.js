import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton event={orderOne} />
    </li>
  );
};

export default Order;
