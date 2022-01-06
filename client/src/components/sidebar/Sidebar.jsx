import './sidebar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("https://nature-essence-blog.herokuapp.com/api/categories");
            console.log(res)
            setCats(res.data);
        };
        getCats();
    },[])

    return ( 
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://m.media-amazon.com/images/I/718aRifd4TL._SL1423_.jpg" 
                    alt="Me"
                    className='sidebarImg'
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam molestiae cupiditate 
                    nostrum, sint, tempore non nam porro accusamus sunt ipsam et repellat quidem. 
                </p>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;