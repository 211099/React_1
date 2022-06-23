import IconGitHub from '../styles/Icon/icon-github.png'
import '../styles/Header.css'

const Header = () => {
    return (
            <div className="Container-Header">
                <div className='Item-Icon-Header'><a href="https://github.com/211099/CS_211099_22.git" target="_blank"><img src={IconGitHub}></img></a></div>
                <div className='Item-Title-Header'><h1>Welcome </h1></div>
                <div className='Item-Navbar-Header'></div>
            </div>
    )
}

export default Header;