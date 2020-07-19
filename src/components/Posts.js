import React from 'react'

 const Posts = ({posts, loading}) => {
    
    if(loading){
        return <h1>Loading ...</h1>
    }
    
    return (
  
        <div>
            <div>
               
                {posts.map(post => (
                    <div className="card-body"key={post.id} >

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

        </div>
    )
}
export default Posts;