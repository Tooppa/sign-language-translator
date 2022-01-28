import Container from '../components/Container';
import '../styles/ProfilePage.css';

export default function ProfilePage() {
  return <>
    <div className="color-bg-yellow">
      <div className="horizontal">
        <img className='logo' src="./assets/Logo.png" alt="Hello" />
        <div className='vertical'>
          <h1>Username: user</h1>
          <button className='logout'>
            <h2>Logout</h2>
          </button>
        </div>
      </div>
    </div>
    <Container>
      <h1>Translations</h1>

    </Container>
  </>;
}
