import React, { useState } from 'react'

const Hw3 = () => {

    const[items, setItems] = useState([])
    const[text, setText] = useState("")
    
  return (
    <div>
        <input value={text} type="text" onChange={(e) => {
            setText(e.target.value)
        }} />
        <button onClick={() => {
            setItems([text, ...items])
            setText("")
        }}>Add</button>

       {items.length > 0 && <ul>
            {
                items.map((item) =>{
                    return <li>{item}</li>
                })
            }
        </ul>}
    </div>
  )
}

export default Hw3

