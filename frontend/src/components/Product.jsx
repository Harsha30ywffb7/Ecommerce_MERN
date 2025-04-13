import React from "react";

const Product = ({ item }) => {
  console.log("items of categories", item);
  return (
    <div>
      <div className="border border-gray-300 h-[300px] w-[250px] rounded-2xl my-10">
        <img src={item.image} alt="" className="h-[70%] w-[80%] mx-auto p-5" />
        <p className="line-clamp-2 px-4 text-gray-600">{item.title}</p>
        <div className="flex justify-between px-4">
          <p>Price: ${item.price}</p>
          <p>rating: {item.rating.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
