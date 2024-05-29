import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Departments = () => {
  const departmentsArray = [
    {
      name: "Cardiology",
      imageUrl: "../../images/department/cardiology.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "../../images/department/derma.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "../../images/department/neuro.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "../../images/department/ortho.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "../../images/department/radiology.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='container departmens'>
      <h2 className='dep-heading'>Departments</h2>
      <br />
      <hr  className='hr-css' />
      <br />
      <br />
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium","small"]}>
        {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department"  />
              </div>
            )
          })}
      </Carousel>
      
    </div>
  );
};

export default Departments
