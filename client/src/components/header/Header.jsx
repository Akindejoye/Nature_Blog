import './header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">React & Node</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img
                    className='headerImg' 
                    src="https://images.unsplash.com/photo-1482148454461-aaedae4b30bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Water Fall" 
                />
            </div>
        </>
    );
}
 
export default Header;