import React, { useState, useEffect } from "react";
const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  const CUSTOMER_API = "https://cyf-react.glitch.me/customers/";
  useEffect(() => {
    fetch(CUSTOMER_API + props.id)
      .then(res => res.json())
      .then(json => setCustomer(json));
  }, [props.id]);

  /* https://cyf-react.glitch.me/customers/<ID> */
  return (
    <div>
      <h3>Customer {props.id} Profile</h3>
      <ul>
        <li>ID:{customer.id}</li>
        <li>Email:{customer.email}</li>
        <li>VIP:{customer.vip ? "Yes" : "No"}</li>
        <li>Phone Number:{customer.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
