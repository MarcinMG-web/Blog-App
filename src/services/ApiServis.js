import React, {useState} from 'react'
import axios from 'axios';
import {idFromButton} from '../components/Posts'

const api = axios.create({
    // https: //jsonplaceholder.typicode.com/posts/${idFromButton}/comments
    baseURL:`https://jsonplaceholder.typicode.com/posts`
})

const [ initPost, setInitPost ] = useState([])

export const getPost = async () => {
    try{
        const data = await api.get(`/${idFromButton}/comments`)
        .then(({data})=> data);
        setInitPost({data})
    } catch (err) {
        console.log(err)   
    }
    
}

export const sendPost = async () => {
    const res =  await api
    .post(`/${idFromButton}/comments`, {formData})
        console.log(res)
        getPost()
    .catch(err => console.log(err));
}

export const deletePost = async (idFromButton) => {
    const data = await api.delete(`/${idFromButton}/comments`)
    getPost()
}

export const updatePost = async (idFromButton, val) => {
    const data = await api.patch(`/${idFromButton}/comments`, {name: val})
    getPost()
}