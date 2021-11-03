import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {


    return (

        <nav>
            <Link to="/"><h2 className="main-title">Hinch Blog </h2></Link>
            <ul className="menu-list">
                <li className="menu-item"> <Link to='/'>Home</Link> </li>
                <li className="menu-item"> <Link to="/create">Create Blog</Link> </li>
            </ul>
        </nav>

    );
}

export default Navbar;