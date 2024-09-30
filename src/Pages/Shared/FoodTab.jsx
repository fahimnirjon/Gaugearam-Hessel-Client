import React from "react";
import FoodCard from "../../Components/Card/FoodCard";

const FoodTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default FoodTab;
