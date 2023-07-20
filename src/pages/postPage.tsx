import Navbar from "../components/Navbar";
import { PostCard } from "../components/PostsCard";
import { fetchDataPosts } from "../hooks/axios";
import { useState, useEffect } from 'react';

interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;

}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        try{
        (
            async () => {
            const posts = await fetchDataPosts();
            setPosts(posts);
            }
        )
        ();
        
        }
        catch(err){
            console.log("ERROR ASYNC/AWAIT",err);
        }
    },[]);
    console.log(posts);
    return(
        <div>
            <PostCard posts={posts}/>
        </div>
        
    )

}
export {Posts};