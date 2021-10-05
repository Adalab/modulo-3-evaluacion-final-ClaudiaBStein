import '../styles/layout/CharacterDetail.scss';

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return <p>Personaje no encontrado</p>;
  } else {
    return (
      <article className='articleDetail'>
        <img
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
          className='articleDetail__img'
        ></img>
        <ul className='articleDetail__list'>
          <li className='articleDetail__list--name'>
            Name: {props.character.name}
          </li>
          <li className='articleDetail__list--item'>
            Planet: {props.character.planet}
          </li>
          <li className='articleDetail__list--item'>
            Species: {props.character.species}
          </li>
          <li className='articleDetail__list--item'>
            Status: {props.character.status}
          </li>
          <li className='articleDetail__list--item'>
            Episodes: {props.character.episode.length}
          </li>
        </ul>
      </article>
    );
  }
};
export default CharacterDetail;
