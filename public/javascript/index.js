window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(characterId);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characterId = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(characterId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterId = document.getElementsByName('chr-id')[0].value;

    const updatedCharacter = {
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      weapon: document.getElementsByName('weapon')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].checked
    }
   
    charactersAPI.updateOneRegister(characterId, updatedCharacter);

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newCharacter = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].checked
    }
    charactersAPI.createOneRegister(newCharacter);
  });
});