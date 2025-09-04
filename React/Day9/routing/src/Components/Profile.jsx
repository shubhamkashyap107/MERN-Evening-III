import React, { useEffect } from 'react'

const Profile = () => {
  useEffect(() => {
    console.log("Profile component mounted")


    return () => {
      console.log("Profile comp unmounted")
    }
  })
  return (
    <div>Welcome top profile page</div>
  )
}

export default Profile