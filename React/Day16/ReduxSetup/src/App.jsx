import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./Utils/CounterSlice"

const App = () => {
  const dis = useDispatch()
  const sliceData = useSelector((s) => {
    return s.counter
  })

  console.log(sliceData)
  return (
    <>
    <h1>{sliceData}</h1>


    <button onClick={() => {
      dis(increment())
    }}>Increment</button>


    <button onClick={() => {
      dis(reset())
    }}>Reset</button>


    <button onClick={() => {
      dis(decrement())
    }}>Decrement</button>
    </>

  )
}

export default App