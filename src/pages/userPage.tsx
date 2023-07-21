import { useState, useEffect} from "react";
import { UserCard } from "../components/UserCard";
import axios from "axios"


interface UserModel {
    id:number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }


const Users: React.FC = () => {

    const [users,setUsers] = useState<UserModel[]>([]);

    const fetchDataUsers = async () => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const users:UserModel[] = response.data as UserModel[];
            setUsers(users);
        } catch(err){
            console.log('ERROR ',err);
        }
    }

    useEffect( () => {
        fetchDataUsers();
    },[])

    return(
       <div>
            <UserCard data={users}></UserCard>
       </div>
    )
    

}

export{Users};