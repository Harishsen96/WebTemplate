import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <div className="logo">
                    <img src="https://document-export.canva.com/QQwWs/DAFn-KQQwWs/48/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230731T140331Z&X-Amz-Expires=80326&X-Amz-Signature=9d554cefcf5396bb456ca98dc83aa891f60b6fec34e24c3d9ba1f0000f5f6b39&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2001%20Aug%202023%2012%3A22%3A17%20GMT" style={{width:'120px',height:'40px'}}></img>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
