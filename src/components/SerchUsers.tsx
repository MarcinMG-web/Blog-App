import React, { useState, useEffect, ChangeEvent } from 'react';
import { getAllUsers } from '../services/ApiService';

import { Posts } from './Posts';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const SerchUsers = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isloading, setLoading] = React.useState(true);

  const [userId, setUserId] = React.useState(0);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(false);

      const dataUsers = await getAllUsers();
      setUsers(dataUsers);
    };

    getUsers();
  }, []);

  if (isloading) {
    return <h1>Loading ...</h1>;
  }

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedUser = e.target.selectedIndex;
    setUserId(selectedUser);
  };

  return (
    <div>
      <div>Find user to display posts:</div>

      <div className='input-group'>
        <div className='custom-file'>
          <select id='users' onChange={handleChangeSelect}>
            <option>Users ...</option>
            {users.map((user: IUser) => (
              <option key={user.id} value={user.id}>
                {user.name} - {user.id}
              </option>
            ))}
          </select>
        </div>
      </div>

      {userId > 0 ? <Posts userId={userId} /> : null}
    </div>
  );
};
