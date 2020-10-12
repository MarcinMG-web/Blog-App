import React, {useState} from 'react'

import {sendComment} from '../services/ApiService'

const AddComments = ({postId}) => {
    
    const initialFormComment = {
        name:'',
        body: '',
        email:'',
    }
   
    const [formData, updateFormData] = useState(initialFormComment)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })

    }
    // Send form
    const handleSubmitForm = (e) => {
        console.log('formularz wysłany')
        e.preventDefault();
        console.log(formData)
  
            const setCommnet = async () => {
                const assignDataForm = await sendComment(postId, formData)
                
                console.log('Nowy komentarz:', assignDataForm)
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

export default AddComments
