import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function Crystal() {

  const Crystals = [
    {
      imgSrc: "./src/assets/img/crystal/glass-candle-with-fragrance.png",
      name: "Glass Candle With Fragrance",
    },
    {
      imgSrc: "./src/assets/img/crystal/swan-shape-candle-with-fragrance.png",
      name: "Swan Shape Candle with Fragrance",
    },
    {
      imgSrc: "./src/assets/img/crystal/tulip-shaped-revolving-tea-light-holder.png",
      name: "Tulip Shaped Revolving Tea Light Holder",
    },
    {
      imgSrc: "./src/assets/img/crystal/perfume-glass-candles.png",
      name: "Perfume Glass Candles",
    },
    {
      imgSrc: "./src/assets/img/crystal/heart-clear-glass-paper-weight.png",
      name: "Heart Clear Glass Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/crystal/heart-glass-paper-weight.png",
      name: "Heart Glass Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/crystal/bubble-vintage-paper-weight.png",
      name: "Bubble Vintage Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/crystal/crystal-ball-paper-weight.png",
      name: "Crystal Ball Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/crystal/heart-vase-pen-stand.png",
      name: "Heart Vase Pen Stand",
    },
    {
      imgSrc: "./src/assets/img/crystal/diamond-pen-holder-mobile-holder.png",
      name: "Diamond Pen Holder & Mobile Holder",
    },
    {
      imgSrc: "./src/assets/img/crystal/golden-vase-fragrance-paper-weight.png",
      name: "Golden Vase Fragrance Paper Weight",
    },
    {
      imgSrc: "./src/assets/img/crystal/cricket-table-top1.png",
      name: "Cricket Table Top",
    },
    {
      imgSrc: "./src/assets/img/crystal/gratia-holi-colours.png",
      name: "Gratia Holi Color's",
    },
  ];

  return (
    <>
      <Bread pageTitle={'Crystal'} pagePath={'/crystal'} />
      <ProductComp products={Crystals} />
    </>
  )
}
