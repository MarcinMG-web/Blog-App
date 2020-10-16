import React,  { useState, ChangeEvent, FormEvent } from 'react'

import { IComment } from './ShowComments'

import { sendComment } from '../services/ApiService'

interface IProps {
    postId: number,
    comments: any,
    setComments: any,
}

export const AddComments = ({postId, comments, setComments}:IProps): JSX.Element => {
    
    const initialFormComment:IComment  = {
        postId: '',
        id: '',
        name:'',
        email:'',
        body: '',  
    }
   
    const [formData, updateFormData] = useState<IComment>(initialFormComment)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
 
    }
 
    // Send form
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
           const setCommnet = async () => {
                const assignDataForm = await sendComment(postId, formData)
                               
                const newComment = comments.slice()
                newComment.push(assignDataForm);
                setComments(newComment)
            }

       setCommnet();
    }
  
    return ( 

        <form onSubmit = {handleSubmitForm}>

            <label htmlFor="exampleFormControlTextarea1" className='form-lable'>Your Coment:</label>

            <input type={'text'} className={'form-control'}  name={'name'}  placeholder={'Name:'} onChange={handleChange} />

            <textarea className="form-control" name={'body'}  placeholder='Comment body:' rows={3} onChange={handleChange}/>

            <input type={'email'} className={'form-control'}  name={'email'}  placeholder={'Email:'} onChange={handleChange}/>
                
            <input type={"submit"} value={'Add Comment'} className="btn btn-success" />
               
        </form>
    )
}