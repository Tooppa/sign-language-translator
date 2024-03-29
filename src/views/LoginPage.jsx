import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAttemptAction } from "../store/actions/loginActions";
import { sessionInitAction } from "../store/actions/sessionActions";
import "../styles/LoginPage.css";

export default function HomePage() {
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameSubmitted = (ev) => {
    ev.preventDefault();

    dispatch(loginAttemptAction(ev.target.username.value));
  };

  useEffect(() => {
    dispatch(sessionInitAction());
  },[dispatch]);

  useEffect(() => {
    if (login.isLoggedIn) {
      navigate("/translation");
    }
  }, [login, navigate]);

  return (
    <div className="color-bg-yellow">
      <div className="horizontal">
        <img className="logo" src="./assets/Logo-Hello.png" alt="Hello" />
        <div className="vertical">
          <h1 className="heading text-color-white" style={{fontSize: '42px'}}>Lost in translation</h1>
          <h2>Get started by signing in with a username</h2>
        </div>
      </div>
      <form onSubmit={nameSubmitted}>
        <div className="formBg">
          <div className="inputField horizontal">
            <input
              type="text"
              placeholder="What is your name?"
              name="username"
            />
            <button className="color-bg-purple" type="submit">
              <img id="arrow" src="./assets/arrow-icon-1177.png" alt="->" />
            </button>
          </div>
          <div className="line" />
        </div>
      </form>
    </div>
  );
}
