import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productName } = useParams();
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:3001/katloon/product/${productName}`)
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
                width="200px"
                height="300px"
              />
              <h3>{item.name}</h3>
              <h3>{item.description}</h3>
              <h3>${item.price}</h3>
            </>
          );
        })}
    </div>
  );
}
