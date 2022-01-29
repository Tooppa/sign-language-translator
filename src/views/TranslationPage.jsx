import '../styles/TranslationPage.css';
import React, { useEffect, useState } from 'react';
import { translateToSignLanguage } from '../services/translationEngine.js'
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TranslationPage() {
  const [text, setText] = useState('');
  const [translations, setTranslations] = useState([]);

  const session = useSelector(state => state.session);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!session.isLoggedIn) {
      console.log('user not logged in redirecting back main');
      navigate('/');
    }
  }, []);

  const Signs = () => {
    return translations.map((t, index) => {
      return <div key={t+index}>
        <img className="signs" src={t} alt="" />
      </div>
    });
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setTranslations(await translateToSignLanguage(text));
  }
  return <>
    <div className="color-bg-yellow">
      <form onSubmit={handleSubmit}>
        <div className='translateField'>
          <input
            type="text"
            placeholder='Type here to translate'
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className='color-bg-purple' type='submit'>-{'>'}</button>
        </div>
      </form>
    </div>
    <Container>
      <Signs/>
    </Container>
  </>;
}
