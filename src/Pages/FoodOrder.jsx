import React, { useState } from "react";
import order from "../assets/shop/banner2.jpg";
import CoverItem from "./Shared/CoverItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import FoodTab from "./Shared/FoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FoodOrder = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>গাঁওগেরাম হেঁশেল | Order Page</title>
      </Helmet>
      <CoverItem img={order} title="Order Food"></CoverItem>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <FoodTab items={salads}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={pizzas}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={soups}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={desserts}></FoodTab>
          </TabPanel>
          <TabPanel>
            <FoodTab items={drinks}></FoodTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default FoodOrder;
