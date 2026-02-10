import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function Leatherite() {

  const Leatherites = [
    {
      imgSrc: "./src/assets/img/leatherrite/writing-pad.png",
      name: "Writing Pad",
    },
    {
      imgSrc: "./src/assets/img/leatherrite/cubic-calendar.png",
      name: "Cubic Calendar",
    },
    {
      imgSrc: "./src/assets/img/leatherrite/multiple-organiser.png",
      name: "Multiple Organiser",
    },
    {
      imgSrc: "./src/assets/img/leatherrite/chit-pad-pen-holder.png",
      name: "Chit Pad, Mobile & Pen Holder ",
    },
    {
      imgSrc: "./src/assets/img/leatherrite/table-organiser.png",
      name: "Table Organiser",
    },
    {
      imgSrc: "./src/assets/img/leatherrite/chit-pad-mobile-pen-holder1.png",
      name: "Chit Pad & Pen Holder",
    }
  ];

  return (
    <>
      <Bread pageTitle={'Leatherite'} pagePath={'/leatherite'} />
      <ProductComp products={Leatherites} />
    </>
  )
}
