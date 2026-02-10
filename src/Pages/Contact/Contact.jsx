import React from 'react'
import GenContactForm from '../../Components/GenContactForm/GenContactForm'
import ContactBread from '../../Components/Bread/ContactBread'

function Contact() {
  return (
    <>
    <ContactBread pageTitle="Contact Us" pagePath="/contact" />
    <GenContactForm/>

    </>
  )
}

export default Contact
