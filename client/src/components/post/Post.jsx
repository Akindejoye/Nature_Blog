import './post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const PF = 'http://localhost:7000/images/';

    return ( 
        <div className='post'>
            {post.photo && (
                 <img 
                 src={PF + post.photo} 
                 alt="" 
                 className='postImg'
             />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(c => {
                       return <span className='postCat'>{c.name}</span>
                    })}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <div className="postTitle">{post.title}</div>
                </Link>
                <hr />
                <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
            </div>
            <div className="postDesc">
                {post.desc}
            </div>
        </div>
     );
}
 
export default Post;