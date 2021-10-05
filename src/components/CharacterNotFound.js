import { Link } from 'react-router-dom';

function CharacterNotFound(props) {
  return (
    <p className='characterNotFound'>
      <h1 className='characterNotFound__title'>¡WUBBA LUBBA DUB DUB!</h1>
      <h2 className='characterNotFound__text'>CHARACTER NOT FOUND</h2>
      <strong className='characterNotFound__strong'>*BURP*</strong>
    </p>
  );
}

export default CharacterNotFound;
