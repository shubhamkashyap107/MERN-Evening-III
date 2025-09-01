import { useEffect } from "react"
import B from "./B"

const A = () => {
    useEffect(() => {
        console.log("A")
    }, [])
  return (
    <div>
        <p>A</p>
        <B />
    </div>
  )
}

export default A