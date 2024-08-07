import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/katloon/category")
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
      <div>
        <Link to={`/katloon/products/`}>
          <button>Products</button>
        </Link>
      </div>
      {loading && <p>Loading.....</p>}
      {error && <p>Failed: {error}</p>}
      {data &&
        data.map((item) => {
          return (
            <>
              <img src={`http://localhost:3001/content/${item.imageUrl}`} />
              <h3>{item.name}</h3>
            </>
          );
        })}
    </div>
  );
}
