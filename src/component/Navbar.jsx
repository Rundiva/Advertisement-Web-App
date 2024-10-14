import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <div className=" bg-[#1a1f71] flex justify-between pr-28 h-16 items-center text-white ">
        <nav className="space-x-10 ml-96">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        </nav>
        <div className="space-x-10">
        <button><Link to = "/login">Login</Link></button>
        <button><Link to = "/signup">Sign Up</Link></button>
        </div>
        
       
        </div>
        
        
    </div>
  )
}

export default Navbar