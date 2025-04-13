import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Body = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    setItems(response?.data);
    const array = response.data.map((obj) => obj.category);

    const uniqueCategories = [...new Set(array)];
    console.log(uniqueCategories);
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    // uses to execute functions when page reloads.
    fetchData();
  }, []);

  if (!items) return;
  return (
    <div>
      <div className="mt-30 px-20 ">
        {categories.map((category) => {
          return (
            <div key={category}>
              <p className="text-2xl ">{category}</p>
              <div className="flex flex-wrap gap-20 justify-center">
                {items.map((item) =>
                  item.category === category ? (
                    <Product key={item.id} item={item} />
                  ) : null
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* <Product item={items[0]} /> */}
    </div>
  );
};

export default Body;
