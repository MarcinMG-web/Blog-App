import React, {useState, useEffect}  from 'react'
import AddComments from './AddComments'

import {getCommentsById} from '../services/ApiService'

const ShowComments = ({postId}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const getCommnets = async () => {
            const dataComments = await getCommentsById(postId);
            console.log(dataComments) 
            setComments(dataComments)
        }

        getCommnets();
       
    }, [postId]);

    return (
        <div>

            {comments.map(comment => (<div className = "card-body" key = {comment.id} >
                        <div className="card-body-userID">Post id: {postId}</div>
                            {/* COMMENT  NAME*/}
                                <b>Name: {comment.name}</b>
                            <br /><br /> 
                                    
                            {/* COMMENT BODY*/}
                            <p className = "card-body" >
                                <i>Body: {comment.body} </i>
                            </p>
                            
                            {/* COMMENT  EMAIL*/}
                        <div className="card-body-postID">Email:{comment.email} </div>
                        <br />
                    </div>
                    ))}
                
                {postId ? <AddComments postId={postId}/> : null} 
         
        </div>
    )
}

export default ShowComments
