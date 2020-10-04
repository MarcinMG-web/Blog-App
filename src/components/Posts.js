import React, {useState} from 'react'
import Pagination from './Pagination';

 const Posts = ({posts,isloading}) => {
    
    const [ curreatPage, setcurreatPage ] = useState(1);
    const [ postsPerPage, ] = useState(8); 

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Changee page
    const paginate = (pageNumber) => setcurreatPage(pageNumber);


    if(isloading){
        return <h1>Loading ...</h1>
    }
    
    return (
  
        <div>
            <div>
               
                {currentPosts.map(post => (
                    
                    <div className="card-body"key={post.id} >
                        <div className="card-body-userID">User ID: {post.userId}</div>
                            {/* POST  TITLE*/}
                                <b>Post: {post.title}</b>
                            <br /><br /> 
                            
                            {/* POST  BODY*/}
                            <p className="card-body">
                                <i>Body: {post.body}</i>
                            </p>
                     </div>
                    ))}
                      
            </div>
            {<Pagination  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> }
        </div>
        
    )
    
}
 

export default Posts;