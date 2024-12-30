import React from "react";
import { useFetch } from "../hook/useFetch";

const Home = () => {
  const { apiData, loading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

//https://fakestoreapi.com/products
  return (
    <div className="row g-0">
      <div className="col-3">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            An active item
          </li>
         
          {loading ? (
            <span>loading...</span>
          ) : (
            <>
              {apiData.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      <div className="col-9">

      </div>
    </div>
  );
};

export default Home;
