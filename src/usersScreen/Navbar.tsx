

const Navbar = () =>{

return(
    <nav className="flex bg-teal-500 p-6 ">
            
        <div className="flex items-center  text-white">
            <div className=" mr-20 font-semibold text-xl tracking-tight">  
                 NavBar
            </div>
            <div className="flex justify-center">
                <div className="mr-10 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Users
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Posts
                </div>
            </div>
        </div>
        
    </nav>
        
)
}

export default Navbar;