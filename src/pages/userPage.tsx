import Navbar from "../components/Navbar";
import { fetchDataUsers } from "../hooks/axios";
import { useState, useEffect} from "react";
import { UserCard } from "../components/UserCard";


interface CardData {
    id:number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }


const Users: React.FC = () => {

    const [users,setUsers] = useState<CardData[]>([]);

    useEffect(() => {
        try{
        const asyncAwaitData = async ()  => {
            const result = await fetchDataUsers();
            setUsers(result);
        }
        asyncAwaitData();
        }
        catch(err){
            console.log("ERROR ASYNC/AWAIT",err);
        }
  
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