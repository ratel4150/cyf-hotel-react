import React from "react";

const Footer = props => {
  return (
    <footer className=" text-white">
      <ul>
        {props.data.map((prop, index) => {
          return <li key={index}>{prop}</li>;
        })}
      </ul>
    </footer>
  );
};
export default Footer;
