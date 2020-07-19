import React, {useState, useEffect} from 'react';

import {Header} from './components/Header';
import Post from './components/Posts';


import axios from 'axios';
import './App.css';

function App() {

  const [ posts, setPosts ] = useState([]); 
  const [ loading, setLoading ] = useState(false);
  const [ curreatPage, setcurreatPage ] = useState(1);
  const [ postPerPage, setpostPerPage ] = useState(5); 
 
    useEffect(() => {
      const fetchPost = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      }

      fetchPost();
    }, [])

    console.log(posts);
    return (
      
      <div className="App">
        <Header />
        <Post posts={posts} loading={loading}/>
      </div> 
    );
}

export default App;
