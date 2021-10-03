import '../styles/layout/CharactersList.scss';

const CharactersList = (props) => {
  const html = props.data.map((character, index) => (
    <li className='main__form--section--list--item item'>
      <img
        src=''
        alt='personaje'
        className='main__form--section--list--item--image image'
      />
      <h2
        className='main__form--section--list--item--name name'
        alt='nombre'
        title='nombre'
      ></h2>
      <h3
        className='main__form--section--list--item--species species'
        alt='especie'
        title='especie'
      ></h3>
    </li>
  ));

  return <ul className='main__form--section--list list'>{html}</ul>;
};
export default CharactersList;
