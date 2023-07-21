import { PostCard } from "../components/PostsCard";
import { useState, useEffect } from 'react';
import axios from "axios"

interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;

}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    const fetchDataPosts = async () => {
        try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts:PostModel[] = response.data as PostModel[]
        setPosts(posts);
        }catch(err){
            console.log('ERROR ',err);
        }
    }

    useEffect(() => {
       fetchDataPosts();
    },[]);
    
    return(
        <div>
            <PostCard posts={posts}/>
        </div>
        
    )

}
export {Posts};