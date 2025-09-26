import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Otp2 = () => {


    const ipRef1 = useRef()
    const ipRef2 = useRef()
    const ipRef3 = useRef()
    const ipRef4 = useRef()
    const ipRef5 = useRef()
    const ipRef6 = useRef()

    const[otp, setOtp] = useState(new Array(6).fill(null))
    console.log(otp)
    const[arr] = useState([ipRef1, ipRef2, ipRef3, ipRef4, ipRef5, ipRef6])
    const[currRef, setCurrRef] = useState(0)

    useEffect(() => {
       arr[currRef].current.focus()
    }, [currRef])

  return (
    <div className="flex bg-red-200 h-[100vh] items-center justify-center">
      <div className="border border-gray-300 bg-white shadow-lg rounded-2xl h-[40vh] w-[40vw] flex flex-col items-center justify-center p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Enter OTP</h2>
        <div className="flex gap-3">
          {/* <input ref={ipRef1} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
          {/* <input ref={ipRef2} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
          {/* <input ref={ipRef3} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
          {/* <input ref={ipRef4} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
          {/* <input ref={ipRef5} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
          {/* <input ref={ipRef6} type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" /> */}
        
            {[0,0,0,0,0,0].map((item, index) => {
                return <input onChange={() => {
                    if(currRef == 5)
                    {
                        return
                    }
                    setCurrRef(currRef + 1)
                }} ref={arr[index]}  type="number" className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg" />
            })}
        
        </div>
      </div>
            <style jsx>{`
        /* Chrome, Safari, Edge */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  )
}

export default Otp2
