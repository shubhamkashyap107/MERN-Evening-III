import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-500">
      <h3 className="text-xl font-bold">LOGO</h3>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/hp">Harry Potter</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </nav>
  );
};


export default Navbar