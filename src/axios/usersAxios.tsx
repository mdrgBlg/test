import {useState, useEffect} from "react"
import axios from "axios"

const usersAxios = () => {

    interface Data {
        name: string;
        username: string;
        email: string;
        phone:string;
    }
    
    const [data, setData] = useState<Data[]>([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    
    
    const fetchInfo = () => {
    
        return axios.get(url).then((response) => setData(response.data)).catch(err =>{console.log(err)});
    
    }
    
    useEffect(() => {
        fetchInfo();
    }, [])
    
    
    return data;
}

export default usersAxios;