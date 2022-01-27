import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/translation">Translation</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </nav>
}