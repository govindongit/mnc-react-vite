import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function Fiber() {

  const Fibers = [
    {
      imgSrc: "./src/assets/img/fiber/independence-day-dual-pen-stand.png",
      name: "Independence Day Dual Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/dandi-march.png",
      name: "Dandi March",
    },
    {
      imgSrc: "./src/assets/img/fiber/fibre-stationary-holder.png",
      name: "Fiber Stationary Holder",
    },
    {
      imgSrc: "./src/assets/img/fiber/fiber-fruit-card-holder.png",
      name: "Fiber Fruit Card Holder",
    },
    {
      imgSrc: "./src/assets/img/fiber/shake.png",
      name: "Hand Shake Chit Pad Holder with Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/1.png",
      name: "Gate Way Model",
    },
    {
      imgSrc: "./src/assets/img/fiber/hammer-pen-stand.png",
      name: "Hammer Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/tabla-veena.png",
      name: "Tabla & Veena",
    },
    {
      imgSrc: "./src/assets/img/fiber/sitting-mother-baby-table-top.png",
      name: "Sitting Mother Baby TableTop",
    },
    {
      imgSrc: "./src/assets/img/fiber/mother-baby-table-top.png",
      name: "Mother Baby Table Top",
    },
    {
      imgSrc: "./src/assets/img/fiber/amar-jawan-table-op.png",
      name: "Amar Jawan Table Top",
    },
    {
      imgSrc: "./src/assets/img/fiber/heart-tea-coaster.png",
      name: "Heart Tea Coaster",
    },
    {
      imgSrc: "./src/assets/img/fiber/potli-pen-holder.png",
      name: "Potli Pen Holder",
    },
    {
      imgSrc: "./src/assets/img/fiber/baby-in-hand-pen-stand.png",
      name: "Baby in Hand Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/brain-pen-stand.png",
      name: "Brain Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/helmet-pen-stand.png",
      name: "Helmet Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/astronaut-mobile-holder.png",
      name: "Astronaut Mobile Holder",
    },
    {
      imgSrc: "./src/assets/img/fiber/smiley-pen-stand-fiber.png",
      name: "Smiley Pen Stand Fiber",
    },
    {
      imgSrc: "./src/assets/img/fiber/heart-in-hand-chit-pad.png",
      name: "Heart in Hand Chit Pad",
    },
    {
      imgSrc: "./src/assets/img/fiber/doctor-appron-pen-stand.png",
      name: "Doctor Appron Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/chit-pad-holder.png",
      name: "No. 1 Chit Pad Holder",
    },
    {
      imgSrc: "./src/assets/img/fiber/book-shape-chit-pad.png",
      name: "Book Shape Chit Pad",
    },
    {
      imgSrc: "./src/assets/img/fiber/tossex-pen-stand.png",
      name: "Tossex Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/fiber/king-paper-weight.png",
      name: "King Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/fiber/thumbs-up-table-top.png",
      name: "Thumbs UP Table Top",
    },
    {
      imgSrc: "./src/assets/img/fiber/superb-table-top.png",
      name: "Superb Table Top",
    },
    {
      imgSrc: "./src/assets/img/fiber/world-cup-trophy-table-top.png",
      name: "World Cup Trophy Table Top",
    },
    {
      imgSrc: "./src/assets/img/fiber/baby-in-hand-chit-pad.png",
      name: "Baby In Hand Chit Pad",
    },

  ];

  return (
    <>
      <Bread pageTitle={'Fiber'} pagePath={'/fiber'} />
      <ProductComp products={Fibers} />
    </>
  )
}
