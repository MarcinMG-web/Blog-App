import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Post from './components/Posts';
import axios from 'axios';
import './App.css';

const App = () => {

  const [ posts, setPosts ] = useState([]); 
  const [ isloading, setLoading ] = useState(false);

    useEffect(() => {
      const getPost = async () => {
        setLoading(true);
        const baseURL = `https://jsonplaceholder.typicode.com/posts`
        const res = await axios.get(baseURL);
        setPosts(res.data);
        setLoading(false);
      }

      getPost();
    }, []);

   
    return (
      
      <div className="App">
        <Header />
        <Post posts={posts} loading={isloading}/>
      </div> 
    );
}

export default App;
