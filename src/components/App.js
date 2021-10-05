import '../styles/App.scss';
import '../styles/layout/Footer.scss';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../services/charactersApi';
import ls from '../services/ls';
import CharactersList from './CharactersList';
import CharactersSearch from './CharactersSearch';
import CharacterDetail from './CharacterDetail';
import Form from './Form';

function App() {
  /*---------Variables---------*/
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [CharactersSearchpecies, setCharactersSearchpecies] = useState('All');
  const routeData = useRouteMatch('/characters/:id');

  /*---------Fetch---------*/
  useEffect(() => {
    if (ls.get('characters', []).length > 0) {
      setData(ls.get('characters', []));
    } else {
      api.getCharacters().then((incomingData) => {
        setData(incomingData);
        ls.set('characters', incomingData);
      });
    }
  }, [searchName]);

  /*---------Funciones---------*/

  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };
  console.log(selectedCharacter);
  const handleCharactersSearchpecies = (ev) => {
    setCharactersSearchpecies(ev.currentTarget.value);
  };

  const filteredData = data
    .filter(
      (character) =>
        CharactersSearchpecies === 'All' ||
        character.species === CharactersSearchpecies
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
        <Switch />

        <Route path='/characters/:id'>
          <section className='sectionDetail'>
            <CharacterDetail character={selectedCharacter} />
          </section>
        </Route>
        <Route exact path='/'>
          <Form
            searchName={searchName}
            handleSearchName={handleSearchName}
            CharactersSearchpecies={CharactersSearchpecies}
            handleCharactersSearchpecies={handleCharactersSearchpecies}
            CharactersList={CharactersList}
            CharactersSearch={CharactersSearch}
            data={filteredData}
          />
        </Route>
        <Switch />
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
