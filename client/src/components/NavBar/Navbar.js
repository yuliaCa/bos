import { Link } from 'react-router-dom';
// Link is built-in with react-router-dom, that helps us stay on the same page, without reloading it, and not sent a request to the server every time we click a regular <a> tag. 

function Navbar() {
    // first div is for logo
    return (
        <header>
            <div>
                LOGO
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/features'>Features</Link>
                    </li>
                    <li>
                        <Link to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <div>icon</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;