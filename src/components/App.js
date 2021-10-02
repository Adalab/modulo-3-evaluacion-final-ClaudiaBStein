import '../styles/App.scss';

function App() {
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
          <input type='text' placeholder='Buscar' class='main__form--text' />
          <button class='main__form--search' type='button'>
            Search
          </button>
          <select name='select' className='main__form--select'>
            <option value=''>Especie</option>
            <option value=''>Origen</option>
            <option value=''>Estatus</option>
          </select>
        </form>
        <form>
          <ul>
            <li>
              <h2></h2>
              <h3></h3>
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
