import CharactersList from './CharactersList';
import CharactersSearch from './CharactersSearch';
const Form = (props) => {
  return (
    <form className='main__form'>
      <CharactersSearch
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
        CharactersSearchpecies={props.CharactersSearchpecies}
        handleCharactersSearchpecies={props.handleCharactersSearchpecies}
      />
      <section className='main__form--section'>
        <CharactersList data={props.data} />
      </section>
    </form>
  );
};
export default Form;
