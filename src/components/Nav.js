import "./nav.css"
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/marketer">
                    <li>Marketer</li>
                </Link>
                <Link to="enduser">
                    <li>End-User</li>
                </Link>
            </ul>
        </nav>
    )
}