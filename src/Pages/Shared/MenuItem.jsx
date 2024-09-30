import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] h-[100px]"
        src={image}
      />
      <div>
        <h2>{name}------------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-300">${price}</p>
    </div>
  );
};

export default MenuItem;
