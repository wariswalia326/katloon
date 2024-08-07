import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Checkout() {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userCredit: "",
  });

  const handleTextInput = (ev) => {
    const { name, value } = ev.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const Submit = (ev) => {
    ev.preventDefault();
  };

  const ClearClick = (e) => {
    e.preventDefault();
    setData({
        userName: "",
        userEmail: "",
        userCredit: "",
      });
  };

  return (
    <>
      <div className="checkout-container">
          <div className="checkout-box">
            <form onSubmit={Submit}>
              <div>
                <label htmlFor="userName">Name:</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={data.name}
                  onChange={handleTextInput}
                />
              </div>
              <div>
                <label htmlFor="userEmail">Email:</label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={data.email}
                  onChange={handleTextInput}
                />
              </div>
             
              <div>
                <label htmlFor="userCredit">Credit Card:</label>
                <input
                  type="text"
                  id="userCredit"
                  name="userCredit"
                  value={data.creditcard}
                  onChange={handleTextInput}
                />
              </div>
              <Link to="/katloon/cart/showSummary">
              <button type="submit">Proceed</button>
              </Link>
              <button type="button" onClick={ClearClick}>Clear</button>
              
            </form>
          </div>
      </div>
    </>
  );
}
