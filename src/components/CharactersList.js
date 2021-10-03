import '../styles/layout/CharactersList.scss';
import CharacterItem from './CharacterItem';

const CharactersList = (props) => {
  const html = props.data.map((character, index) => (
    <li className='main__form--section--list--item item'>
      <CharacterItem character={character} />
    </li>
  ));

  return <ul className='main__form--section--list list'>{html}</ul>;
};
export default CharactersList;
