import '../styles/layout/CharactersList.scss';
import { Link } from 'react-router-dom';
const CharacterItem = (props) => {
  return (
    <>
      <Link to={`./characters/${props.character.id}`} className='link'>
        <img
          src={props.character.image}
          alt='personaje'
          className='main__form--section--list--item--image image'
        />
        <h2
          className='main__form--section--list--item--name name'
          alt='nombre'
          title='nombre'
        >
          {props.character.name}
        </h2>
        <h3
          className='main__form--section--list--item--species species'
          alt='especie'
          title='especie'
        >
          {props.character.species}
        </h3>
      </Link>
    </>
  );
};
export default CharacterItem;
