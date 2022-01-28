import '../styles/TranslationPage.css';
export default function TranslationPage() {
  return <>
    <div className="color-bg-yellow">
      <form action="">
        <div className='translateField'>
          <input type="text" placeholder='Type here to tranlate' />
          <button className='color-bg-purple' type='submit'>-{'>'}</button>
        </div>
      </form>
    </div>
    <div className='textArea'>
      <div className='formBg'>
        <p className='text'>

        </p>
        <div className='line' />
      </div>
    </div>
  </>;
}
