class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // This method will be used for both the fetch all characters and the fetch one character
  // It will receive an array of characters and print it in the DOM
  printResponse(response) {
    document.querySelector('.characters-container').innerHTML = '';
    response.forEach((character) => {
      const newCharacter = document.createElement('div');
      newCharacter.className = 'character-info';
      newCharacter.innerHTML = `
    <div class="name">Character Name: <span>${character.name}</span> </div>
    <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
    <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
    <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
    `;
      document.querySelector('.characters-container').appendChild(newCharacter);
    })
  }

  getFullList() {
    axios.get(this.BASE_URL + '/characters')
      .then((response) => {
        console.log(response.data);
        this.printResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + `/characters/${id}`)
      .then((response) => {
        // in this case we only get one character, so we need to put it in an array
        // then the printResponse method will work
        console.log([response.data]);
        this.printResponse([response.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  createOneRegister(character) {
    axios.post(this.BASE_URL + '/characters', character)
  }

  updateOneRegister(id, character) {
    axios.put(this.BASE_URL + `/characters/${id}`, character)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + `/characters/${id}`)
      .then((response) => {
        console.log(response.data);
      }
      )
      .catch((error) => {
        console.log(error);
      })
  }
}
