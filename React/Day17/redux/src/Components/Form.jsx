import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addText } from '../Utils/DataSlice'
import {  v4 as uuid } from "uuid"
const Form = () => {
    const[text, setText] = useState("")
    const dispatch = useDispatch()
  return (
    <div className='flex h-[100vh] w-6/12  justify-center items-center'>
        <div className='flex flex-col'>
            <input value={text} className='border w-[30vw] h-[67px]' onChange={(e) => {
                setText(e.target.value)
            }} type="text" />
            <button onClick={() => {
              if(text.length == 0)
              {
                return 
              }
              dispatch(addText({text, id : uuid()}))
              setText("")
            }} className='bg-green-300'>Add Item</button>
        </div>
    </div>
  )
}

export default Form