import axios from "axios"



const fetchDataUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch(error){
        console.log(error);
    }

}

const fetchDataPosts = async () => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    } catch(error){
        console.log(error);
    }
}

export { fetchDataUsers, fetchDataPosts};