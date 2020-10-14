import React, { useState, useEffect} from 'react'
import { getAllUsers } from '../services/ApiService'

import Posts from './Posts'

const SerchUsers = () => {  

    const [users, setUsers] = useState([])
    const [isloading, setLoading] = useState(true);
    
    const [userId, setUserId] = useState(0) 

     useEffect(() => {

        const getUsers = async () => { 
            setLoading(false)

            const dataUsers = await getAllUsers();
            setUsers(dataUsers)
        }

        getUsers();
    }, []);
    
   if(isloading){
        return <h1>Loading ...</h1>
    }

    const handleChangeSelect = (e) => {
        const selectedUser = e.target.value
        setUserId(selectedUser)
    }

    return (
        <div>
            <div>Find user to display posts:</div>

            <div className="input-group">
                <div className="custom-file">
                    <select id="users" onChange={handleChangeSelect}> 
                        
                        <option>Find Users ...</option>
                            {users.map(user =>
                                <option key={user.id} value={user.id} >
                                {user.id} {user.name} 
                        </option>
                        )}

                    </select>
                </div>
            </div>

            {(userId>0) ? <Posts  userId = {userId}/> : null}

        </div>
    )
}

export default SerchUsers