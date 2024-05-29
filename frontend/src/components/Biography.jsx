import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt="bio-image" className='bio-image' />
      </div>
      <div className='banner'>
        <p>Biography</p>
        <h3>About - us</h3>
        <p style={{
          fontSize : 20,
        }}>Welcome to Care Master, your comprehensive solution for streamlining and optimizing healthcare operations. We understand the intricate demands and challenges faced by modern healthcare institutions, which is why we've developed a robust and user-friendly platform tailored to meet the diverse needs of hospitals, clinics, and medical practices.</p>
        <br />

        <p style={{
          fontSize : 20,
        }}>At Care Master, we are committed to revolutionizing the way healthcare organizations operate by leveraging cutting-edge technology and innovative solutions. Our team of experienced professionals brings together expertise in healthcare management, software development, and user experience design to deliver a platform that empowers healthcare providers to deliver exceptional patient care efficiently and effectively.</p>
        
        
      </div>    
    </div>
  )
}

export default Biography
