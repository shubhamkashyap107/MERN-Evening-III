import {Route, Routes, Link} from "react-router-dom"
// import One from "./Components/One"
// import Two from "./Components/Two"
// import Three from "./Components/Three"
import { lazy, Suspense } from "react"
import Loader from "./Components/Loader"
const One = lazy(() => import("./Components/One"))
const Two = lazy(() => import("./Components/Two"))
const Three = lazy(() => import("./Components/Three"))

const App = () => {
  return (
    <div>

      <nav>
        <Link to={"/one"}>One</Link>
        <Link to={"/two"}>Two</Link>
        <Link to={"/three"}>Three</Link>
      </nav>
      <Routes>
        <Route path="/one" element={
          <Suspense fallback={<h1>Loading...</h1>}>
           <One />
          </Suspense>
          } />
        <Route path="/two" element={
          <Suspense fallback={<Loader />}>
            <Two />
          </Suspense>
          } />
        <Route path="/three" element={<Three />} />
      </Routes>
    </div>
  )
}

export default App