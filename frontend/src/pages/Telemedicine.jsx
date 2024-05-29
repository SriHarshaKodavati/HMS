import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main.jsx";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';

const Telemedicine = () => {
  return (
    <>
      <div className="tele">
        <div><img src="../../images/tele-img.jpeg" alt="tele image" className="tele-style"/></div>
        <div>
            <h2 className="h2-style-tele">Telemedicine Services</h2>
            <hr className="hr-tele"/>
            <p>Welcome to our telemedicine services! Get medical assistance conveniently over the phone.</p>
            <br />
            <p>Phone Consultations: Speak directly with our healthcare professionals for medical advice and prescriptions.</p>
            <br />
            <p>How It Works:
                <br />
                <br />

<b>Call:</b> Dial our dedicated telemedicine hotline: <span className="hotline">123-456-7891.</span>
<br />
<b>Connect:</b> Speak with a healthcare provider for assistance.</p>
            
        </div>
      </div>
    </>
  )
}

export default Telemedicine
