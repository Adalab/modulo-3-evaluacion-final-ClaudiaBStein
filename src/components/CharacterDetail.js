const CharacterDetail = (props) => {
  return (
    <article className='section'>
      <img src='{props.character.image}' alt='' className='section__img'></img>
      <ul className='section__list'>
        <li className='section__list--name'>Name: {props.character.name}</li>
        <li className='section__list--item'>
          Planet: {props.character.origin.name}
        </li>
        <li className='section__list--item'>
          Species: {props.character.species}
        </li>
        <li className='section__list--item'>
          Status: {props.character.status}
        </li>
        <li className='section__list--item'>
          Episodes: {props.character.episode}
        </li>
      </ul>
    </article>
  );
};
export default CharacterDetail;
