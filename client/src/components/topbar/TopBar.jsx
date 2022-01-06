import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from './../../context/Context';
import { useContext } from 'react';

// const pics = 'https://m.media-amazon.com/images/I/718aRifd4TL._SL1423_.jpg';

const TopBar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:7000/images/";

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
    }

    return ( 
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/' className='link'>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/' className='link'>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/write' className='link'>WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to='/settings'>
                            <img src={PF+user.profilePic} alt="Profile" className='topImg' />
                        </Link>
                    ) : (
                        <ul className='topList'>
                            <li className="topListItem">
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
     );
}
 
export default TopBar;