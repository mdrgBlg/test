import Navbar from "../components/Navbar";
import { fetchDataUsers } from "../hooks/axios";
import { useState, useEffect} from "react";
import { UserCard } from "../components/UserCard";


interface Data {
    name: string;
    username: string;
    email: string;
    phone: string;
  }


const Users: React.FC = () => {

    const [users,setUsers] = useState<Data[]>([]);

    useEffect(() => {
        
        fetchDataUsers().then((usersData) => setUsers(usersData))
    },[])

    console.log(users);

    return(
       <div>
            <Navbar></Navbar>
            <UserCard data={users}></UserCard>
       </div>
    )
    

}

export{Users};