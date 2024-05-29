import React from 'react'
import AppointmentForm  from '../components/AppointmentForm'
import Hero  from '../components/Hero'

const Appointment = () => {
  return (
    <>
      <Hero title={"Reserve your time with us by scheduling your appointments now!"} imageUrl={"../../images/hero-img.jpg"}/>
      <AppointmentForm/>
    </>
  )
}

export default Appointment
