import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Profile = () => {

const { isAuthenticated, user } = useContext(Context);

if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
       
    </div>
  )
}

export default Profile

