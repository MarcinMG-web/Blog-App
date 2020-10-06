import React from 'react'

const Comments = () => {
    return (    
            <form>
                <label htmlFor="exampleFormControlTextarea1" className='form-lable'>Your Coment:</label>

                <input type={'name'} className={'form-control'}  name={'name'} placeholder={'UserID:'}/>
                <input type={'text'} className={'form-control'}  name={'title'} placeholder={'Title:'}/>

                <textarea className="form-control" name={'body'} placeholder='Comment body:' rows={3}/>
                <input type={'email'} className={'form-control'}  name={'email'} placeholder={'Email:'}/>
                
                <input type="submit" value={'Add Comment'} className="btn btn-success" />
            </form>
    )
}

export default Comments
