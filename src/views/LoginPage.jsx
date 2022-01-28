import '../styles/LoginPage.css';
export default function HomePage() {
  return <div className="main">
    <div className="horizontal">
      <img src="./assets/Logo-Hello.png" alt="Hello" />
      <div className='vertical'>
        <h1>Lost in translation</h1>
        <h2>Get started</h2>
      </div>
    </div>
    <form action="">
      <div className='formBg'>
        <div className='inputField'>
          <input type="text" placeholder='What is your name?' />
          <button className='color-bg-purple' type='submit'>-{'>'}</button>
        </div>
        <div className='line' />
      </div>
    </form>
  </div>;
}
