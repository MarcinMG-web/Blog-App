import React, {useState, useEffect} from 'react'
import Pagination from './Pagination';
import axios from 'axios';

 const Posts = () => {
    
    const [posts, setPosts] = useState([]);
    const [isloading, setLoading] = useState(false);

    const [ curreatPage, setcurreatPage ] = useState(1);
    const [ postsPerPage, ] = useState(8); 

    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            const baseURL = `https://jsonplaceholder.typicode.com/posts`
            const res = await axios.get(baseURL);
            setPosts(res.data);
            setLoading(false);
        }

        getPost();
    }, []);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Changee page
    const paginate = (pageNumber) => setcurreatPage(pageNumber);



    if(isloading){
        return <h1>Loading ...</h1>
    }
    
    console.log(posts)
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