import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";

export default function Product() {
  const { addToCart, removeToCart, redux } = useContext(Context);

  function clickCartHandler(item) {
    addToCart(item);
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/katloon/product")
      .then((response) => response.json())
      .then((items) => {
        setError(null);
        setLoading(false);
        setData(items);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setData([]);
      });
  }, []);
  return (
    <div>
      <div></div>
      {loading && <p>Loading.....</p>}
      {error && <p>Failed: {error}</p>}
      {data &&
        data.map((item) => {
          return (
            <>
              <img
                src={`http://localhost:3001/content/${item.imageUrl}`}
                width="100px"
                height="100px"
              />
              <Link to={`/katloon/product/${item.name}`}>
                <h3>{item.name}</h3>
              </Link>
              {!redux.find((obj) => obj._id === item._id) ? (
                <button onClick={() => clickCartHandler(item)}>
                  AddToCart
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{redux.find((obj) => obj._id === item._id).quantity}</p>
                  <button
                    onClick={() => {
                      removeToCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              )}
            </>
          );
        })}
        <Link to="/katloon/checkout">
        <button>Checkout</button>
        </Link>
    </div>
  );
}
