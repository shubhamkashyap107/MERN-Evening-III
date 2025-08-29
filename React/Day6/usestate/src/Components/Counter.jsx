import {useState} from "react"

const Counter = () => {
    const[count, setCount] = useState(0)
    console.log(count)

  return (
    <div>
        <div className='border w-[300px] mx-auto mt-[300px]'>
            <div className='border text-right p-3 text-3xl'>{count}</div>
            <div className='flex justify-between'>
                <button onClick={() => {
                    setCount(count  + 1)
                }} className='border  h-[60px] w-[80px] cursor-pointer'>+</button>
                <button onClick={() => {
                    setCount(0)
                }} className='border  h-[60px] w-[80px] cursor-pointer'>Reset</button>
                <button onClick={() => {
                    setCount(count - 1)
                }} className='border  h-[60px] w-[80px] cursor-pointer'>-</button>
            </div>
        </div>
    </div>
  )
}

export default Counter