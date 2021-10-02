import '../styles/App.scss';

function App() {
  return (
    <>
      <header>
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
              class='main__form--container--input'
            />
            <button class='glow-on-hover' type='button'>
              Search
            </button>
            <select name='select' className='select'>
              <option value=''>Especie</option>
              <option value=''>Origen</option>
              <option value=''>Estatus</option>
            </select>
          </div>
          <ul>
            <li></li>
          </ul>
        </form>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
