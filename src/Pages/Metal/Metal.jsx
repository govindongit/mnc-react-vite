import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function Metal() {

  const Metals = [
    {
      imgSrc: "./src/assets/img/metal/indian-flag-with-table-clock.png",
      name: "Indian Flag With Table Clock",
    },
    {
      imgSrc: "./src/assets/img/metal/metal-heart-pen-stand.png",
      name: "Metal Heart Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/metal/peacock-table-clock.png",
      name: "Peacock Table Clock",
    },
    {
      imgSrc: "./src/assets/img/metal/dr-logo-metal-pen-stand.png",
      name: "Dr. Logo Metal Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/metal/flexible-spring-pen-stand.png",
      name: "Flexible Spring Pen Stand",
    },

  ];

  return (
    <>
      <Bread pageTitle={'Metal'} pagePath={'/metal'} />
      <ProductComp products={Metals} />
    </>
  )
}
