import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Home")
    }, 2000)


    return () => {
      clearInterval(intervalId)
    }
  })
  return (
    <div>Welcome to home page</div>
  )
}

export default Home