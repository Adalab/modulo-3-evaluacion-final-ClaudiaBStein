import '../styles/App.scss';
import { useEffect, useState } from 'react';
import api from '../services/charactersApi';
import CharactersList from './CharactersList';
import CharactersSearch from './CharactersSearch';

function App() {
  /*---------Variables---------*/
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('All');

  /*---------Fetch---------*/
  useEffect(() => {
    api.getCharacters().then((incomingData) => {
      setData(incomingData);
    });
  }, []);

  /*---------Funciones---------*/
  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleFilterSpecies = (ev) => {
    setFilterSpecies(ev.currentTarget.value);
  };

  const filteredData = data
    .filter(
      (character) =>
        filterSpecies === 'All' || character.species === filterSpecies
    )
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    );

  return (
    <>
      <header className='header'>
        <img
          className='header__img'
          src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
          alt='Rick and Morty'
        ></img>
      </header>
      <main className='main'>
        <form className='main__form'>
          <CharactersSearch
            searchName={searchName}
            handleSearchName={handleSearchName}
            filterSpecies={filterSpecies}
            handleFilterSpecies={handleFilterSpecies}
          />

          <section className='main__form--section'>
            <CharactersList data={filteredData} />
          </section>
        </form>
      </main>
      <footer className='footer'>
        <small className='footer__small'>
          Claudia Stein para Adalab © 2021
        </small>
      </footer>
    </>
  );
}

export default App;
