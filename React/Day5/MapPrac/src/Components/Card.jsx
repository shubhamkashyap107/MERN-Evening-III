import React from 'react'

const Card = ({name, age, email, isActive, joinDate}) => {
  return (
    <div className='border w-[300px] px-5 py-3'>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{email}</p>
        <span>{isActive}</span>
        <span>{joinDate}</span>
    </div>
  )
}

export default Card