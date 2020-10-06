import React, {useState, useEffect} from 'react'
import Pagination from './Pagination';
import axios from 'axios';

 const Posts = () => {
    
    const [posts, setPosts] = useState([]);
    const [isloading, setLoading] = useState(false);

    const [idFromButton, setIdFromButton] = useState(1)
    
    const [ curreatPage, setCurreatPage ] = useState(1);
    const [ postsPerPage ] = useState(1); 

    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            const baseURL = `https://jsonplaceholder.typicode.com/posts/${idFromButton}/comments`
            const res = await axios.get(baseURL);
            setPosts(res.data);
            setLoading(false);
        }

        getPost();
    }, [idFromButton]);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // Handle click button
    const handleClick = () => {
        setIdFromButton(idFromButton => idFromButton + 1)
    }
       
    if(isloading){
        return <h1>Loading ...</h1>
    }
    
    console.log(posts)
    return (
        <div>
            <span className="card-lable">Find User ID to display posts:</span>
                        
            <button 
                type='button'
                className = "btn btn-outline-secondary"
                value={idFromButton}
                onClick={handleClick}
                >
                Change User
            </button>

            <div>
                {currentPosts.map(post => (
                    <div className="card-body"key={post.id} >
                        <div className="card-body-userID">User ID: {post.postId}</div>
                            {/* POST  TITLE*/}
                                <b>Title: {post.name}</b>
                            <br /><br /> 
                            
                            {/* POST  BODY*/}
                            <p className = "card-body" >
                                <i>Body: {post.body}</i>
                            </p>
                            <p className = "card-body" >
                                <i>By: {post.email}</i>
                            </p>
                     </div>
                    ))} 
            </div>
            {<Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            setCurreatPage={setCurreatPage}/>}
        </div>
    )
}
 

export default Posts;