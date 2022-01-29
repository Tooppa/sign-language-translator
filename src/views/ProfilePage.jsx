import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { sessionLogoutAction } from '../store/actions/sessionActions';
import Container from '../components/Container';
import '../styles/ProfilePage.css';

export default function ProfilePage() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!session.isLoggedIn) {
      console.log('user not logged in redirecting back main');
      navigate('/');
    }
  }, []);

  const Translations = () => {
    if (session.user.translations) {
      return session.user.translations.map((t, index) => {
        return <li key={t + index} className='listItem'>
          {t}
        </li>
      });
    }
    else{
      return <li/>
    }
  }

  const logout = () => {
    dispatch(sessionLogoutAction());
    navigate('/')
  }
  const clearTranslations = () => {

  }

  return <>
    <div className="color-bg-yellow">
      <div className="horizontal">
        <img className='robot' src="./assets/Logo.png" alt="Hello" />
        <div className='vertical'>
          <h1>Username: user</h1>
          <button className='logout' onClick={logout}>
            <h2>Logout</h2>
          </button>
        </div>
      </div>
    </div>
    <Container>
      <div className='info'>
        <h1 >Translations</h1>
        <button className='clear' onClick={clearTranslations}>
          <h2>Clear Translations</h2>
        </button>
      </div>
      <ul className='translationList'>
        <Translations/>
      </ul>
    </Container>
  </>;
}
