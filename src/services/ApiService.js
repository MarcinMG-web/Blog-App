import axios from 'axios';

const api = axios.create({
    // https: //jsonplaceholder.typicode.com/posts/${idFromButton}/comments
    baseURL: `https://jsonplaceholder.typicode.com/`
})

export const getAllPosts = async () => {
    try {
       return await api.get(`/posts`)
        .then(({data})=> data);
    
    } catch(err) {
        console.log(err)   
    }
}

export const getCommentsById = async (postId) => {
    return await api.get(`/posts/${postId}/comments`)
        .then(({data})=> data)
                       
        .catch(err => console.log(err));
    
}

export const sendComment = async (postId, formData) => {
    return await api.post(`/posts/${postId}/comments`, formData)
    
        .then(({data})=> data)
                        
        .catch(err => console.log(err));
}

export const deletePost = async (postId) => {
     return await api.delete(`/posts/${postId}/comments`)
    .then(({data})=> data)
                        
     .catch(err => console.log(err));
}

