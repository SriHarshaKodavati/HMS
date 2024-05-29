import React from 'react'

const AboutHome = ({title}) => {
  return (
    
    <div className='about-hero container about-edit' >
        
        <h1 style={{
          fontSize:20,
          fontWeight : 'normal',
        }} className='h1-bio'>{title}</h1>
      
    </div>
  )
}

export default AboutHome
