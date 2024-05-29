import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docImage, setDocImage] = useState("");
  const [docImagePreview, setDocImagePreview] = useState("");


  const navigateTo = useNavigate();

  const departmentsArray = [
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Radiology",
    "Dermatology",
  ];

  const handleImage = async(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload= ()=>{
      setDocImagePreview(reader.result);
      setDocImage(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName",firstName);
      formData.append("lastName",lastName);
      formData.append("email",email);
      formData.append("phone",phone);
      formData.append("gender",gender);
      formData.append("password",password);
      formData.append("doctorDepartment",doctorDepartment);
      formData.append("docImage",docImage);
      formData.append("dob",dob);


      await axios
        .post(
          "http://localhost:4000/api/v1/user/doctor/addnew",
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          // setIsAuthenticated(true);
          navigateTo("/");
          // setFirstName("");
          // setLastName("");
          // setEmail("");
          // setPhone("");
          // setDob("");
          // setGender("");
          // setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }


  return (
    <section className="page">

    <div className="container form-component add-doctor-form">
        <img src="../../logo.png" alt="logo image" className='logo-my'/>
        <h1 className="form-title">Add New Doctor</h1>
        <form onSubmit={handleAddNewDoctor}>

          <div className="first-wrapper">
            <div>
              <img src={docImagePreview ? `${docImagePreview}` : "../../doc-alt.jpg"} alt="Doctor Image" className="logo-doc"/>
              <input type="file"  onChange={handleImage}/>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <select value={doctorDepartment} onChange={(e)=> setDoctorDepartment(e.target.value)}>
            <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}
            </select>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Add New Admin</button>
          </div>
        </form>
      </div>


    </section>
      
  )
};

export default AddNewDoctor
