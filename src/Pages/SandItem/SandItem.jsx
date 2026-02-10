import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function SandItem() {
  
  const SandItems=[
    {
      imgSrc: "./src/assets/img/sand-timers/sand-timer-with-compass-base.png",
      name: "Sand Timer With Compass Base",
    },
    {
      imgSrc: "./src/assets/img/sand-timers/5-minutes-sand-timer.png",
      name: "5 Minutes Sand Timer",
    },
    {
      imgSrc: "./src/assets/img/sand-timers/15-minutes-sand-timer.png",
      name: "15 Minutes Sand Timer",
    },
    {
      imgSrc: "./src/assets/img/sand-timers/double-sand-timer.png",
      name: "Double Sand Timer",
    },
  ];

  return (
   <>
   <Bread pageTitle={'Sand Timers'} pagePath={'/sandtimers'}/>
   <ProductComp products={SandItems}/>
   </>
  )
}
