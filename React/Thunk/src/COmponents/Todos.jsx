import { useSelector } from "react-redux"


const Todos = () => {

  const todoSliceData = useSelector(store => store.todo)
  // console.log(todoSliceData)
  return (
    <div>
      {todoSliceData.data.map((item) => {
        return <h1>{item.title}</h1>
      })}
    </div>
  )
}

export default Todos