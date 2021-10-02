import { useEffect, useState } from 'react';
import api from '../services/charactersApi';
import '../styles/App.scss';

function App() {
  /*Variables*/
  const [data, setData] = useState([]);
  /*Funciones*/

  /*Fetch*/
  useEffect(() => {
    api.getCharacters().then((incomingData) => {
      console.log(incomingData);
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
          <input
            type='text'
            placeholder='Buscar'
            className='main__form--text'
          />
          <button className='main__form--search' type='button'>
            Search
          </button>
          <select name='select' className='main__form--select'>
            <option value=''>Especie</option>
            <option value=''>Origen</option>
            <option value=''>Estatus</option>
          </select>
        </form>
        <form className='main__form2 form2'>
          <ul className='main__form2--list list'>
            <li className='main__form2--list--item item'>
              <img src='' alt='personaje' />
              <h2
                className='main__form2--list--item--name name'
                alt='nombre'
                title='nombre'
              ></h2>
              <h3
                className='main__form2--list--item--species species'
                alt='especie'
                title='especie'
              ></h3>
            </li>
          </ul>
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
