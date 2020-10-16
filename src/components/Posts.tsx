import React, { useState, useEffect } from 'react'
import { getPostsById } from '../services/ApiService'

import { ShowComments } from './ShowComments'

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body:  string,
}

interface IProps {
    userId: number
}

export const Posts = ({userId}: IProps): JSX.Element => {

    const [posts, setPosts] = useState<IPost[]>([]);

    const [ curreatPage, setCurreatPage ] = React.useState(1);
    const [ postsPerPage ] = React.useState(1); 

    // Display Comments
    const [display, setDisplay] = React.useState(false) 

    useEffect(() => {

        const getPost = async () => { 

            const dataPosts = await getPostsById(userId);
            setPosts(dataPosts)
        }

        getPost();
    }, [userId]);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage; 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 
 
    // Changed Page 
    const nextPage = ():void => {
        if (curreatPage < posts.length) {
            setCurreatPage(curreatPage + 1)
        } 
    }

    const prevPage = ():void => { 
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
                
                {currentPosts.map((post: IPost) => (
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

                        {display && <ShowComments  postId = {post.id} />}

                     </div>
                    ))}

            </div>
            
        </div>
    )
}