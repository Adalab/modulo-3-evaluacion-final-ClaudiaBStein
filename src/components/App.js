import { useEffect, useState } from 'react';
import api from '../services/charactersApi';
import '../styles/App.scss';
import CharactersList from './CharactersList';

function App() {
  /*Variables*/
  const [data, setData] = useState([]);
  /*Funciones*/

  /*Fetch*/
  useEffect(() => {
    api.getCharacters().then((incomingData) => {
      setData(incomingData);
    });
  }, []);

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
          <div className='main__form--container'>
            <input
              type='text'
              placeholder='Buscar'
              className='main__form--container--text'
            />
            <button className='main__form--container--search' type='button'>
              Search
            </button>
            <label className='main__form--container--label'>
              Filtra por especie
            </label>
            <select name='select' className='main__form--container--select'>
              <option
                className='main__form--container--select--option'
                value=''
              >
                -
              </option>
              <option
                className='main__form--container--select--option'
                value=''
              >
                Humana
              </option>
              <option
                className='main__form--container--select--option'
                value=''
              >
                Alien
              </option>
            </select>
          </div>
          <section className='main__form--section'>
            <CharactersList data={data} />
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
