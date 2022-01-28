import '../styles/TranslationPage.css';
import React, { useState } from 'react';
import { translateToSignLanguage } from '../services/translationEngine.js'

export default function TranslationPage() {
  const [text, setText] = useState('');
  const [translations, setTranslations] = useState([]);

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
    <div className='textArea'>
      <div className='formBg'>
        <div className='text'>
          <Signs />
        </div>
        <div className='line' />
      </div>
    </div>
  </>;
}
