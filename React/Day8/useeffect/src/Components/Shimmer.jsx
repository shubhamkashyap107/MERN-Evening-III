import React from 'react'

const Shimmer = () => {
  return (
    <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr", gap : "20px"}}>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
        <div style={{height : "300px", width : "250px", backgroundColor : "gray"}}></div>
    </div>
  )
}

export default Shimmer