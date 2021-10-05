const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          id: character.id,
          image: character.image,
          status: character.status,
          planet: character.origin.name,
          episode: character.episode,
        };
      });
    });
};

const objectToExport = { getCharacters: getCharacters };

export default objectToExport;
