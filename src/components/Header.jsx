import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const login = useSelector((state) => state.login);
  const navigate = useNavigate();

  const profile = () => {
    navigate("/profile");
  };

  if (!login.isLoggedIn)
    return (
      <nav>
        <h3 className="heading text-color-white">Lost in translation</h3>
      </nav>
    );
  else {
    return (
      <nav>
        <h3 className="heading text-color-white">Lost in translation</h3>
        <button onClick={profile}>
          <p>Profile</p>
        </button>
      </nav>
    );
  }
}
