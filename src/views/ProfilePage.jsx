import { useSelector } from 'react-redux';
import Container from '../components/Container';
import '../styles/ProfilePage.css';

export default function ProfilePage() {
  const session = useSelector((state) => state.session);

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
