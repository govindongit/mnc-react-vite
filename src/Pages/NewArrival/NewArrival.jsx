import React from 'react'
import NewAr from '../../Components/NewAr/NewAr'
import NewBread from '../../Components/Bread/NewBread'

function NewArrival() {
  return (
   <>
   <NewBread pageTitle={'New Arrivals'} pagePath={"/newarrival"}/>
   <NewAr/>
   </>
  )
}

export default NewArrival
