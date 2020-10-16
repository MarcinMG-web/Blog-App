import axios from 'axios';

const api = axios.create({
    // https: //jsonplaceholder.typicode.com/users/${userId}/posts/${postId}/comments
    baseURL: `https://jsonplaceholder.typicode.com/`
})

export const getAllUsers = async () => {
    try {
        return await api.get(`/users`)
            .then(({data}) => data);

    } catch (err) {
        console.log(err)
    }
}

export const getPostsById = async (userId: number) => {
    try {
       return await api.get(`users/${userId}/posts`)
        .then(({data})=> data);
    
    } catch(err) {
        console.log(err)   
    }
}

export const getCommentsById = async (postId: number) => {
    return await api.get(`/posts/${postId}/comments`)
        .then(({data})=> data)
                       
        .catch(err => console.log(err));
    
}

export const sendComment = async (postId: number, formData: any) => {
    return await api.post(`/posts/${postId}/comments`, formData)
    
        .then(({data})=> data)
                        
        .catch(err => console.log(err));
}

export const deletePostById = async (postId : number) => {
     return await api.delete(`/posts/${postId}`)
    .then(({data})=> data)
                        
     .catch(err => console.log(err));
}

