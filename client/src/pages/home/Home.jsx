import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import Header from './../../components/header/Header';
import Posts from './../../components/posts/Posts';
import Sidebar from './../../components/sidebar/Sidebar';
import { useLocation } from 'react-router';


const Home = () => {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() =>{
        const fetchPosts = async () => {
            const res = await axios.get('https://nature-essence-blog.herokuapp.com/api/posts'+search)
            setPosts(res.data)
        }

        fetchPosts()
    }, [search])

    return (
        <>
            <Header />
            <div className='home'>
               <Posts posts={posts} />
               <Sidebar />
            </div>
        </>
    );
}
 
export default Home;