import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1 style={{
          fontSize: 50,
          fontWeight : 'normal'
        }}>{title}</h1>
      </div>
      <div className='banner'>
        <img src={imageUrl} alt="hero image" className='animated-image' width={300} height={400}/>
      </div>
    </div>
  )
}

export default Hero
