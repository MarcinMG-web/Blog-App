import React, {useState, useEffect} from 'react'
import ShowComments from './ShowComments'
import {getPostsById} from '../services/ApiService'

 const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    const [ curreatPage, setCurreatPage ] = useState(1);
    const [ postsPerPage ] = useState(1); 

    // Display Comments
    const [display, setDisplay] = useState(false) 

    useEffect(() => {

        const getPost = async () => { 

            const dataPosts = await getPostsById(userId);
            console.log(dataPosts);
            setPosts(dataPosts)
        }

        getPost();
    }, [userId]);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage; 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 
 
    // Changed Page 
    const nextPage = () => {
        if (curreatPage < posts.length) {
            setCurreatPage(curreatPage + 1)
        } 
    }

    const prevPage = () => { 
        if (curreatPage > 1) {
            setCurreatPage(curreatPage - 1)
        }  
    }
    
    return (
        
        <div>               
            <button 
                type='button'
                className = "btn btn-outline-secondary"
                value={curreatPage}
                onClick={prevPage}
                >
               Prev Page
            </button>
            <button 
                type='button'
                className = "btn btn-outline-secondary"
                value={curreatPage}
                onClick={nextPage}
                >
                Next page
            </button>

            <div>
                
                {currentPosts.map(post => (
                    <div className="card-body"key={post.id} >     
                        <div className="card-body-userID">User ID: {post.userId}</div>
                            {/* POST  TITLE*/}
                                <b>Title: {post.title}</b>
                            <br /><br /> 
                            
                            {/* POST  BODY*/}
                            <p className = "card-body" >
                                <i>Body: {post.body}</i>
                            </p>
                            {/* POST  id*/}
                        <div className="card-body-postID">Post id: {post.id} </div>
                        <br />
                        
                        <button
                            type = 'button'
                            className = "btn btn-warning"
                            onClick={() => setDisplay(!display)}
                        >
                             Show comments 
                        </button>

                        {display && <ShowComments  postId = {post.id} display={display}/>}

                     </div>
                    ))}

            </div>
            
        </div>
    )
}
 

export default Posts;