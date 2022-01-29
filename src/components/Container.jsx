import '../styles/Container.css';

export default function Container(props) {
    return <div className='textArea'>
    <div className='formBg'>
      <div className='text'>
        {props.children}
      </div>
      <div className='line' />
    </div>
  </div>
}