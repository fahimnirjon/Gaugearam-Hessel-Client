import React from "react";
import { Helmet } from "react-helmet-async";
import CoverItem from "./Shared/CoverItem";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offer = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>গাঁওগেরাম হেঁশেল | Menu</title>
      </Helmet>
      <CoverItem img={menuImg} title="our menu"></CoverItem>
      {/* Offer */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory items={offer}></MenuCategory>

      {/* dessert */}
      <MenuCategory
        coverImg={dessertImg}
        items={desserts}
        title="Dessert"
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        coverImg={pizzaImg}
        items={pizzas}
        title="Pizza"
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        coverImg={saladImg}
        items={salads}
        title="Salad"
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        coverImg={soupImg}
        items={soups}
        title="Soup"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
