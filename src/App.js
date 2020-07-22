import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Post from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {

  const [ posts, setPosts ] = useState([]); 
  const [ loading, setLoading ] = useState(false);
  const [ curreatPage, setcurreatPage ] = useState(1);
  const [ postsPerPage, ] = useState(8); 
 
    useEffect(() => {
      const fetchPost = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      }

      fetchPost();
    }, []);

    // Get current post
    const indexOfLastPost = curreatPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Changee page
    const paginate = (pageNumber) => setcurreatPage(pageNumber);

    console.log(posts);
    return (
      
      <div className="App">
        <Header />
        <Post posts={currentPosts} loading={loading}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div> 
    );
}

export default App;
