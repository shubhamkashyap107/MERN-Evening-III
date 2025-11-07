import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-black text-white flex h-[61px] justify-between items-center px-10">
        <h3>LOGO</h3>



        <div className="flex gap-10">
            <Link to={"/home"}>Home</Link>
            <Link to={"/new"}>Add New Task</Link>
        </div>
    </div>
  )
}

export default Navbar