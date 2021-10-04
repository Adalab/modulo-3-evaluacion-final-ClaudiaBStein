import '../styles/App.scss';

const CharactersSearch = (props) => {
  return (
    <div className='main__form--container'>
      <input
        type='text'
        placeholder='Search'
        className='main__form--container--text'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
      <label className='main__form--container--label'>Filter by species:</label>
      <select
        name='select'
        className='main__form--container--select'
        value={props.filterSpecies}
        onChange={props.handleFilterSpecies}
      >
        <option className='main__form--container--select--option' value='All'>
          All
        </option>
        <option className='main__form--container--select--option' value='Human'>
          Human
        </option>
        <option className='main__form--container--select--option' value='Alien'>
          Alien
        </option>
      </select>
    </div>
  );
};
export default CharactersSearch;
