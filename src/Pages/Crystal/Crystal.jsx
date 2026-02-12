import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
export default function Crystal() {
  const Crystals = [
    {
      imgSrc: asset("crystal/glass-candle-with-fragrance.png"),
      name: "Glass Candle With Fragrance",
    },
    {
      imgSrc: asset("crystal/swan-shape-candle-with-fragrance.png"),
      name: "Swan Shape Candle with Fragrance",
    },
    {
      imgSrc: asset("crystal/tulip-shaped-revolving-tea-light-holder.png"),
      name: "Tulip Shaped Revolving Tea Light Holder",
    },
    {
      imgSrc: asset("crystal/perfume-glass-candles.png"),
      name: "Perfume Glass Candles",
    },
    {
      imgSrc: asset("crystal/heart-clear-glass-paper-weight.png"),
      name: "Heart Clear Glass Paper Weight",
    },
    {
      imgSrc: asset("crystal/heart-glass-paper-weight.png"),
      name: "Heart Glass Paper Weight",
    },
    {
      imgSrc: asset("crystal/bubble-vintage-paper-weight.png"),
      name: "Bubble Vintage Paper Weight",
    },
    {
      imgSrc: asset("crystal/crystal-ball-paper-weight.png"),
      name: "Crystal Ball Paper Weight",
    },
    {
      imgSrc: asset("crystal/heart-vase-pen-stand.png"),
      name: "Heart Vase Pen Stand",
    },
    {
      imgSrc: asset("crystal/diamond-pen-holder-mobile-holder.png"),
      name: "Diamond Pen Holder & Mobile Holder",
    },
    {
      imgSrc: asset("crystal/golden-vase-fragrance-paper-weight.png"),
      name: "Golden Vase Fragrance Paper Weight",
    },
    {
      imgSrc: asset("crystal/cricket-table-top1.png"),
      name: "Cricket Table Top",
    },
    {
      imgSrc: asset("crystal/gratia-holi-colours.png"),
      name: "Gratia Holi Color's",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Crystal"} pagePath={"/crystal"} />
      <ProductComp products={Crystals} />
    </>
  );
}
