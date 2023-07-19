import { fetchDataPosts } from "../hooks/axios";
import { useState, useEffect } from 'react';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchDataPosts().then((posts) => setPosts(posts))
        
    },[]);
    console.log(posts);
    return(
        
        <div>Posts</div>
    )

}
export {Posts};