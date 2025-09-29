import { useEffect, useRef, useState } from "react"

const OTP = () => {

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const refArr = [ref1, ref2, ref3, ref4, ref5, ref6]
  const[otpInput, setOtpInput] = useState(new Array(6).fill(""))
  const[currIdx, setCurrIdx] = useState(0)
  let allowedCharacters = ['1','2','3','4','5','6','7','8','9','0']

  useEffect(() => {
    refArr[currIdx].current.focus()
  }, [currIdx])


  function demo(e, idx)
  {
    let val = e.target.value 
    if(!allowedCharacters.includes(val))
    {
      // console.log("OK")
      return
    }

      let temp = [...otpInput]
      // let temp = structuredClone(otpInput)
      temp[idx] = val
      setOtpInput(temp)

      if(currIdx < refArr.length - 1)
      {
        setCurrIdx(currIdx + 1)
      }

  }

  return (
    <div className='flex items-center justify-center bg-yellow-100 h-[100vh]'>

        <div className='h-[40vh] w-[40vw] bg-white border flex items-center justify-center gap-3 flex-col'>
          <div className="flex gap-3">

            {refArr.map((item, index) => {
              return <input value={otpInput[index]}  type="text" maxLength={1} onChange={(e) => demo(e, index)} 

              onKeyDown={(e) => {
                // console.log(e.key)
                if(e.key == "Backspace")
                {
                  // let temp = otpInput
                  let temp = [...otpInput]
                  temp[index] = ""
                  setOtpInput(temp)
                  if(currIdx > 0 && otpInput[index] == "")
                  {
                    setCurrIdx(currIdx - 1)
                  }
                }
                else if(e.key == "ArrowLeft")
                {
                  if(currIdx == 0)
                  {
                    return
                  }
                  // console.log("OK")
                  setCurrIdx(currIdx - 1)
                }
                else if(e.key == "ArrowRight")
                {
                  if(currIdx == 5)
                  {
                    return
                  }
                  setCurrIdx(currIdx + 1)

                }
              }} ref={item} className='border w-[40px] h-[40px]' />
            })}
          
          </div>

            <button onClick={() => {
              let otp = otpInput.join("")
              if(otp.length < 6)
              {
                alert("Invalid OTP")
                return
              }
              alert(otpInput.join(""))
            }}>Print</button>
        </div>

    </div>
  )
}

export default OTP




