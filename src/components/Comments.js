import React, {useState} from 'react'
import axios from 'axios'
import Posts from './Posts'


const Comments = ({idFromButton, getPost}) => {

    
    const initialFormComment = {
        name:'',
        email:'',
        body:'',
        postId:''
    }
   
    const [formData, updateFormData] = useState(initialFormComment)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    
    }

    const handleSubmitForm = (e) => {
        console.log('formularz wysłany')
        e.preventDefault();
        console.log(formData)
        
        
        const sendPost = async() => {
            const baseURL = `https://jsonplaceholder.typicode.com/posts/${idFromButton}/comments`
            const response = await axios.post(baseURL, formData)
               try {
                    console.log(response)
                    getPost(formData)
               } catch(err){
                    console.log(err)
               }                
        }
        sendPost()
       
    }
    
    

    return ( 
           
            <form onSubmit = {handleSubmitForm}>
                <label htmlFor="exampleFormControlTextarea1" className='form-lable'>Your Coment:</label>

                <input type={'number'} className={'form-control'}  name={'postId'} 
                placeholder={'PostID:'} onChange={handleChange}/>

                <input type={'text'} className={'form-control'}  name={'name'}  placeholder={'Name:'} onChange={handleChange} />

                <textarea className="form-control" name={'body'}  placeholder='Comment body:' rows={3} onChange={handleChange}/>

                <input type={'email'} className={'form-control'}  name={'email'}  placeholder={'Email:'} onChange={handleChange}/>
                
                <input type={"submit"} value={'Add Comment'} className="btn btn-success" />
               
            </form>
           
    )
   
}

export default Comments
