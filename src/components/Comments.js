import React from 'react'

const Comments = () => {
    return (    
            <form>
                <label htmlFor="exampleFormControlTextarea1" className='lableComent'>Your Coment</label>
                <input type={'name'} className={'form-control'}  name={'name'} placeholder={'UserID'} />
                {/* <input type={'email'} className={'form-control'} name={'email'} placeholder={'email'} /> */}
                <input type={'text'} className={'form-control'}  name={'title'} placeholder={'Title'} />
                <textarea className="form-control" name={'body'} placeholder='Comment body:' rows={3} />
                <input type="submit" value={'Add Comment'} className="btn btn-success" />
            </form>
    )
}

export default Comments
