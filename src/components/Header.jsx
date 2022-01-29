import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
    const session = useSelector((state) => state.session);
    const navigate = useNavigate();

    
  const profile = () => {
    navigate('/profile')
  }

    if (!session.isLoggedIn)
        return <nav >
            <h3>Lost in translation</h3>
        </nav>
    else {
        return <nav >
            <h3>Lost in translation</h3>
            <button onClick={profile}>
                <p>
                    Profile
                </p>
            </button>
        </nav>
    }
}