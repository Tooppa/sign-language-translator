import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAttemptAction } from "../store/actions/loginActions";
import "../styles/LoginPage.css";

export default function HomePage() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameSubmitted = (ev) => {
    ev.preventDefault();

    if (!session.isLoggedIn) {
      dispatch(loginAttemptAction(ev.target.username.value));
      navigate("/translation");
    }
  };

  return (
    <div className="color-bg-yellow">
      <div className="horizontal">
        <img className="logo" src="./assets/Logo-Hello.png" alt="Hello" />
        <div className="vertical">
          <h1>Lost in translation</h1>
          <h2>Get started</h2>
        </div>
      </div>
      <form onSubmit={nameSubmitted}>
        <div className="formBg">
          <div className="inputField">
            <input type="text" placeholder="What is your name?" name="username"/>
            <button className="color-bg-purple" type="submit">
              -{">"}
            </button>
          </div>
          <div className="line" />
        </div>
      </form>
    </div>
  );
}
