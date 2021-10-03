const CharacterItem = (props) => {
  console.log('CharacterItem', props);
  return (
    <div>
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
    </div>
  );
};
export default CharacterItem;
