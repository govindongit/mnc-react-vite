import React from 'react'

import Aboutcom from '../../Components/Aboutcom/Aboutcom'
import NewBread from '../../Components/Bread/NewBread'

function About() {
  return (
   <>
   <NewBread pageTitle="About Us" pagePath="/about" />
   <Aboutcom/>
   </>
  )
}

export default About

