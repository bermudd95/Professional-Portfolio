import React from 'react'
import './Description.css'

const Description = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center text-center pt-4'>
        <img 
            src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='hand holding up a light bulb'
        />
        <div className='pt-2 pb-2 m-5'>
            <h3 className='fw-bold'>
                Hello! My name is Danny Bermudez and I am a Junior Web Developer.
            </h3>
            <p className='pt-2'>
                I have about 8 years of developing experience. 8 of those years spans from my time in the military where I learned and used Linux. After I left the military, I decided that I should expand my knowledge by learning a new coding language. This is where I learned Javascript and I love for coding/developing took off. I discovered better practices and learned about libraries as well as frameworks such as React and Angular. This led up to present day where I continue to sharpen my skills and continuously learn better practices and newer processes that would make me a more efficient developer. If you have any questions or would like to discuss work options, please fill out the contact form below. 
            </p>
        </div>
        
    </div>
  )
}

export default Description