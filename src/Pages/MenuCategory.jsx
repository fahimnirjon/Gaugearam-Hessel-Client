import React from "react";
import MenuItem from "./Shared/MenuItem";
import CoverItem from "./Shared/CoverItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-10">
      {title && <CoverItem img={coverImg} title={title}></CoverItem>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-b-4 mt-4">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
