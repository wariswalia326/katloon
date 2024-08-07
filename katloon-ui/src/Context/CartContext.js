const { createContext, useState, useEffect } = require("react");
export const Context = createContext();
export default function CartContext({ children }) {
  const FIRSTELEMENT = 0;
  const [redux, setRedux] = useState(
    localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(redux));
  }, [redux]);

  useEffect(() => {
    const cartItems = localStorage.getItem("carts");
    if (cartItems) {
      setRedux(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (item) => {
    const output = redux.filter((obj) => {
      return obj._id === item._id;
    });
    if (output.length > 0) {
      setRedux(
        redux.map((innerItem) => {
          if (innerItem._id === item._id) {
            return { ...innerItem, quantity: innerItem.quantity + 1 };
          } else {
            return innerItem;
          }
        })
      );
    } else {
      setRedux([...redux, { ...item, quantity: item.quantity + 1 }]);
    }
  };

  const removeToCart = (item) => {
    const output = redux.filter((obj) => {
      return obj._id === item._id;
    });
    if (output.length > 0 && output[0].quantity > 0) {
      if (item.quantity === 1) {
        setRedux(redux.filter((innerItem) => innerItem._id !== item._id));
      } else {
        setRedux(
          redux.map((innerItem) => {
            if (innerItem._id === item._id) {
              return { ...innerItem, quantity: innerItem.quantity - 1 };
            } else {
              return innerItem;
            }
          })
        );
      }
    }
  };
  return (
    <Context.Provider
      value={{
        addToCart,
        removeToCart,
        redux,
      }}
    >
      {children}
    </Context.Provider>
  );
}
