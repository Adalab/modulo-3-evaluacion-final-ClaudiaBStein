import '../styles/App.scss';
import { useEffect, useState } from 'react';
import api from '../services/charactersApi';
import CharactersList from './CharactersList';
import CharactersSearch from './CharactersSearch';
import Form from './Form';

function App() {
  /*---------Variables---------*/
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('All');

  /*---------Fetch---------*/
  useEffect(() => {
    api.getCharacters().then((incomingData) => {
      setData(incomingData);
      console.log(data);
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
        <Form
          searchName={searchName}
          handleSearchName={handleSearchName}
          filterSpecies={filterSpecies}
          handleFilterSpecies={handleFilterSpecies}
          CharactersList={CharactersList}
          CharactersSearch={CharactersSearch}
          data={filteredData}
        />
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
