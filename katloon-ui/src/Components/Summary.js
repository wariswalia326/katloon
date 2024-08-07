import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";

export default function Summary() {
  const {redux } = useContext(Context);
  let total = 0;
  return (
    <>
    {
      redux.map((obj)=>{
        return(
        <>
        <img
        src={`http://localhost:3001/content/${obj.imageUrl}`}
        width="100px"
        height="100px"
      />
      <h3>Item Name X {obj.name}</h3>
      <h3>Item Price X ${obj.price}</h3>
      <h3>Item Quantity X {obj.quantity}</h3>
      <h3>Total: ${total = total + obj.price * obj.quantity}</h3>
      </>
        )
      })
    }
    <h3>Final Amount + Tax: ${total + total*13/100 }</h3>
    <Link to="/">
      <button>Back To Category</button>
    </Link>
    </>
  );
}
