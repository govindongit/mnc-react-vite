import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
export default function Fiber() {
  const Fibers = [
    {
      imgSrc: asset("fiber/independence-day-dual-pen-stand.png"),
      name: "Independence Day Dual Pen Stand",
    },
    {
      imgSrc: asset("fiber/dandi-march.png"),
      name: "Dandi March",
    },
    {
      imgSrc: asset("fiber/fibre-stationary-holder.png"),
      name: "Fiber Stationary Holder",
    },
    {
      imgSrc: asset("fiber/fiber-fruit-card-holder.png"),
      name: "Fiber Fruit Card Holder",
    },
    {
      imgSrc: asset("fiber/shake.png"),
      name: "Hand Shake Chit Pad Holder with Pen Stand",
    },
    {
      imgSrc: asset("fiber/1.png"),
      name: "Gate Way Model",
    },
    {
      imgSrc: asset("fiber/hammer-pen-stand.png"),
      name: "Hammer Pen Stand",
    },
    {
      imgSrc: asset("fiber/tabla-veena.png"),
      name: "Tabla & Veena",
    },
    {
      imgSrc: asset("fiber/sitting-mother-baby-table-top.png"),
      name: "Sitting Mother Baby TableTop",
    },
    {
      imgSrc: asset("fiber/mother-baby-table-top.png"),
      name: "Mother Baby Table Top",
    },
    {
      imgSrc: asset("fiber/amar-jawan-table-op.png"),
      name: "Amar Jawan Table Top",
    },
    {
      imgSrc: asset("fiber/heart-tea-coaster.png"),
      name: "Heart Tea Coaster",
    },
    {
      imgSrc: asset("fiber/potli-pen-holder.png"),
      name: "Potli Pen Holder",
    },
    {
      imgSrc: asset("fiber/baby-in-hand-pen-stand.png"),
      name: "Baby in Hand Pen Stand",
    },
    {
      imgSrc: asset("fiber/brain-pen-stand.png"),
      name: "Brain Pen Stand",
    },
    {
      imgSrc: asset("fiber/helmet-pen-stand.png"),
      name: "Helmet Pen Stand",
    },
    {
      imgSrc: asset("fiber/astronaut-mobile-holder.png"),
      name: "Astronaut Mobile Holder",
    },
    {
      imgSrc: asset("fiber/smiley-pen-stand-fiber.png"),
      name: "Smiley Pen Stand Fiber",
    },
    {
      imgSrc: asset("fiber/heart-in-hand-chit-pad.png"),
      name: "Heart in Hand Chit Pad",
    },
    {
      imgSrc: asset("fiber/doctor-appron-pen-stand.png"),
      name: "Doctor Appron Pen Stand",
    },
    {
      imgSrc: asset("fiber/chit-pad-holder.png"),
      name: "No. 1 Chit Pad Holder",
    },
    {
      imgSrc: asset("fiber/book-shape-chit-pad.png"),
      name: "Book Shape Chit Pad",
    },
    {
      imgSrc: asset("fiber/tossex-pen-stand.png"),
      name: "Tossex Pen Stand",
    },
    {
      imgSrc: asset("fiber/king-paper-weight.png"),
      name: "King Paper Weight",
    },
    {
      imgSrc: asset("fiber/thumbs-up-table-top.png"),
      name: "Thumbs UP Table Top",
    },
    {
      imgSrc: asset("fiber/superb-table-top.png"),
      name: "Superb Table Top",
    },
    {
      imgSrc: asset("fiber/world-cup-trophy-table-top.png"),
      name: "World Cup Trophy Table Top",
    },
    {
      imgSrc: asset("fiber/baby-in-hand-chit-pad.png"),
      name: "Baby In Hand Chit Pad",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Fiber"} pagePath={"/fiber"} />
      <ProductComp products={Fibers} />
    </>
  );
}
