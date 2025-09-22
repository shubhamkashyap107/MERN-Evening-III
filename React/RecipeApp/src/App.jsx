import { useState } from "react"
import Form from "./Components/Form"
import Output from "./Components/Output"

const App = () => {
  const[selectedItem, setSelectedItem] = useState()

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600 drop-shadow-sm">
        🍳 Recipe App
      </h1>
      <div className="flex gap-6 justify-center items-start">
        <Form selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <Output selectedItem={selectedItem} />
      </div>
    </div>
  )
}

export default App




