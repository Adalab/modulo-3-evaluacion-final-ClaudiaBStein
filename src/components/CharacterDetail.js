const CharacterDetail = (props) => {
  if (props.selectedCharacter === undefined) {
    return <p>Personaje no encontrado</p>;
  } else {
    return (
      <article className='section'>
        <img
          src={props.selectedCharacter.image}
          alt={`Foto de ${props.selectedCharacter.name}`}
          title={`Foto de ${props.selectedCharacter.name}`}
          className='section__img'
        ></img>
        <ul className='section__list'>
          <li className='section__list--name'>
            Name: {props.selectedCharacter.name}
          </li>
          <li className='section__list--item'>
            Planet: {props.selectedCharacter.origin.name}
          </li>
          <li className='section__list--item'>
            Species: {props.selectedCharacter.species}
          </li>
          <li className='section__list--item'>
            Status: {props.selectedCharacter.status}
          </li>
          <li className='section__list--item'>
            Episodes: {props.selectedCharacter.episode.length}
          </li>
        </ul>
      </article>
    );
  }
};
export default CharacterDetail;
