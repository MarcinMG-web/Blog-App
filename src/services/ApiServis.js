import {useState} from 'react'
import axios from 'axios';

export const usePost = () => {

    const [posts, setPosts] = useState([]);
    const [isloading, setLoading] = useState(true);

    const [idFromButton, setIdFromButton] = useState(1)
      
    
    const [curreatPage, setCurreatPage] = useState(1);
    const [postsPerPage] = useState(1);

    const getPost = async () => {

        const baseURL = `https://jsonplaceholder.typicode.com/posts/${idFromButton}/comments`
        const response = await axios.get(baseURL);
            try{
                setPosts(response.data);
                setLoading(false);
            } catch(err){
                console.log(err)
                setLoading(true);
            }
        
    }

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    return [
        posts,
        isloading, 
        idFromButton,
        setIdFromButton,
        getPost,
        currentPosts, 
        setCurreatPage, 
        postsPerPage
    ]
   
}

