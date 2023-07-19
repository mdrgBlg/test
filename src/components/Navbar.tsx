import { Link } from "react-router-dom";

const Navbar = () =>{

return(
    <nav className="flex bg-teal-500 p-6 ">
            
        <div className="flex items-center  text-white">
            <div className=" mr-20 font-semibold text-xl tracking-tight">  
                 NavBar
            </div>
            <div className="flex justify-center">
                <div className="mr-10 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                   <Link to={"/"}>Users</Link> 
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <Link to={"/posts"}>Posts</Link>
                </div>
            </div>
        </div>
        
    </nav>
        
)
}

export default Navbar;