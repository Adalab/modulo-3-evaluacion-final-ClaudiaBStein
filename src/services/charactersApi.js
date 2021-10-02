const getCharacters = () => {
  return fetch(
    '//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
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
        };
      });
    });
};

const objectToExport = { getCharacters: getCharacters };

export default objectToExport;