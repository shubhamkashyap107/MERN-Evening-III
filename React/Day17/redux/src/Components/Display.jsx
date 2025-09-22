import { useDispatch, useSelector } from 'react-redux'
import { deleteText } from '../Utils/DataSlice'

const Display = () => {
  const dataSLiceData = useSelector(store => store.data)
  const dispatch =  useDispatch()
  return (
    <div>
        <ul>
            {
              dataSLiceData.map((item, index) => {
                return(
                  <li key={index}>{item.text} <span onClick={() => {
                    dispatch(deleteText(item.id))
                  }}>❌</span></li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Display