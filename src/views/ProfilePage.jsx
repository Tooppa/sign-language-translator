import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { sessionLogoutAction } from '../store/actions/sessionActions';
import Container from '../components/Container';
import '../styles/ProfilePage.css';
import { clearTranslationsAction } from '../store/actions/loginActions';

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
    else {
      return <li />
    }
  }

  const logout = () => {
    dispatch(sessionLogoutAction());
    navigate('/')
  }
  const tranlations = () => {
    navigate('/translation')
  }
  const clearTranslations = () => {
    dispatch(clearTranslationsAction(session.user));
  }

  return <>
    <div className="color-bg-yellow">
      <div className="horizontal buttons">
        <img className='robot' src="./assets/Logo.png" alt="Hello" />
        <div className='vertical'>
          <div className='horizontal'>
            <h1>Username: </h1>
            <h1>{session.user.username}</h1>
          </div>
          <div className='horizontal'>
            <button className='tranlations' onClick={tranlations}>
              <h2>Translate</h2>
            </button>
            <button className='logout' onClick={logout}>
              <h2>Logout</h2>
            </button>
          </div>
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
        <Translations />
      </ul>
    </Container>
  </>;
}
