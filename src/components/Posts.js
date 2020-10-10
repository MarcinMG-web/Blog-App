import React, {useState, useEffect} from 'react'
import Pagination from './Pagination';
import axios from 'axios';
// import {getDatePost} from '../services/ApiServis'

 const Posts = () => {
       
    const [posts, setPosts] = useState([]);
    const [isloading, setLoading] = useState(true);

    const [idFromButton, setIdFromButton] = useState(1)
    
    const [ curreatPage, setCurreatPage ] = useState(1);
    const [ postsPerPage ] = useState(1); 

    useEffect(() => {

      const result = service.getPost();
     
      console.log(result); // wszystkie posty
     
     const result = service.sendPosts();
     console.log(result) // success
     
      setState(result);
     
        const getPost = async () => {
            
            
            const baseURL = `https://jsonplaceholder.typicode.com/posts/${idFromButton}/comments`
            const response = await axios.get(baseURL);
                try {
                    setPosts(response.data);
                    setLoading(false);
                } catch (err) {
                    console.log(err)
                    setLoading(true);
                }
            }

        getPost();
    }, [idFromButton]);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // Changed Post Id
    const handleClick = () => {
        setIdFromButton(idFromButton => idFromButton + 1)
    }
       
    if(isloading){
        return <h1>Loading ...</h1>
    }
    
    console.log(posts)
    return (
        <div>
            <span className="card-lable">Click the button to display posts:</span>
                        
            <button 
                type='button'
                className = "btn btn-outline-secondary"
                value={idFromButton}
                onClick={handleClick}
                >
                Change Post
            </button>

            <div>
                {currentPosts.map(post => (
                    <div className="card-body"key={post.id} >
                        <div className="card-body-userID">Post ID: {post.postId}</div>
                            {/* POST  TITLE*/}
                                <b>Name: {post.name}</b>
                            <br /><br /> 
                            
                            {/* POST  BODY*/}
                            <p className = "card-body" >
                                <i>Body: {post.body}</i>
                            </p>
                            <p className = "card-body" >
                                <i>Email: {post.email}</i>
                            </p>
                     </div>
                    ))} 
            </div>

            {posts ? 
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length} 
                setCurreatPage={setCurreatPage}
                idFromButton={idFromButton}
                />
                :
                null
            }
        </div>
    )
}
 

export default Posts;
