import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    console.log("About component mounted")


    return () => {
      console.log("About comp unmounted")
    }
  })
  return (
    <div>Welcome to about page</div>
  )
}

export default About