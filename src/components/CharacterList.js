import { Component } from "../core/heropy"
import CharacterItem from "./CharacterItem"

export default class CharacterList extends Component {
  constructor() {
    super({
      state: {
        characters: [
          { name: 'Woody', kind: 'Cowboy toy with pull-string voice box' },
          { name: 'Buzz Lightyear', kind: 'Space ranger action figure' },
          { name: 'Hamm', kind: 'The piggy bank' },
          { name: 'Mr. Potato Head <br/>& Mrs. Potato Head', kind: 'Toy with a potato-shaped face'},
          { name: 'Rex', kind: 3000 },
          { name: 'Slinky', kind: 3000 },
          { name: 'Mutant Toys', kind: 3000 },
          { name: 'Jessie', kind: 3000 },
          { name: 'Bullseye', kind: 3000 },
          { name: 'Wheezy', kind: 3000 },
          { name: 'The Prospector', kind: 3000 },
          { name: 'Emperor Zurg', kind: 3000 },
          { name: 'Lotso', kind: 3000 },
          { name: 'Ken', kind: 3000 },
          { name: 'Buttercup', kind: 3000 },
          { name: 'Dolly', kind: 3000 },
          { name: 'Mr. Pricklepants', kind: 3000 },
          { name: 'Peas-In-A-Pod', kind: 3000 },
          { name: 'Big Baby', kind: 3000 },
          { name: 'Chunk', kind: 3000 },
          { name: 'Stretch', kind: 3000 },
          { name: 'Twitch', kind: 3000 },
          { name: 'Bo Peep', kind: 3000 },
          { name: 'Forky', kind: 3000 },
          { name: 'Gabby Gabby', kind: 3000 },
          { name: 'Ducky and Bunny', kind: 3000 },
          { name: 'Giggle McDimples', kind: 3000 },
          { name: 'Duke Caboom', kind: 3000 },
          { name: 'Benson', kind: 3000 },
          { name: 'Combat Carl', kind: 3000 },
          { name: 'Andy', kind: 3000 },
          { name: 'Sid', kind: 3000 },
          { name: 'Al', kind: 3000 },
          { name: 'Bonnie', kind: 3000 },
        ]
      }
    }) 
  }
  render() {
    this.el.classList.add('characters')
    this.el.innerHTML = /* html */ `
      <p class="text">
        Click one of the two buttons below to add or delete characters.<br>
        Select the checkbox for the character you want to delete, and then click the delete button.
      </p>
      <div class="btn-group">
        <button type="button" class="btn">Add a character</button>
        <button type="button" class="btn btn--red">Delete characters</button>
      </div>
      <ul class="character__list"></ul>
    `
    const characterList = this.el.querySelector('.character__list')
    characterList.append(...this.state.characters
      .map(character => new CharacterItem({
        props: {
          name: character.name,
          kind: character.kind
        }
      }).el)
    )
  }
}