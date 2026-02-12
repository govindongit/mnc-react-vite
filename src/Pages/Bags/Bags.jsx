import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
import "./bags.css";
function Bags() {
  const Bag = [
    {
      imgSrc: asset("new-bags/laptop-bag.png"),
      name: "Laptop Bag",
    },
    {
      imgSrc: asset("new-bags/duffel-bag.png"),
      name: "Leatherite Duffel Bag",
    },
    {
      imgSrc: asset("new-bags/bag-01.png"),
      name: "Bag-01",
    },
    {
      imgSrc: asset("new-bags/bag-02.png"),
      name: "Bag-02",
    },
    {
      imgSrc: asset("new-bags/bag-03.png"),
      name: "Bag-03",
    },
    {
      imgSrc: asset("new-bags/bag-04.png"),
      name: "Bag-04",
    },
  ];
  return (
    <>
      <Bread pageTitle={"Bags"} pagePath={"/bags"} />
      <ProductComp products={Bag} />
    </>
  );
}

export default Bags;
