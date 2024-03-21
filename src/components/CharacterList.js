import { Component } from "../core/heropy"
import CharacterItem from "./CharacterItem"

export default class CharacterList extends Component {
  constructor() {
    super({
      state: {
        characters: [
          { name: 'Woody', kind: 'Cowboy toy', trait: 'Pull-string voice box and cowboy detailing' },
          { name: 'Buzz Lightyear', kind: 'Action figure', trait: 'Laser beam, karate-chop action, pop-out wings'},
          { name: 'Hamm', kind: 'Piggy bank', trait: 'In the window knows everything'},
          { name: 'Mr. Potato Head', kind: 'Toy with a potato-shaped face', trait: 'Cynical take on life'},
          { name: 'Rex', kind: 'Dinosaur toy', trait: 'One of the most lovable toys of the bunch' },
          { name: 'Slinky', kind: 'Dachshund-type dog toy', trait: 'Woody&rsquo;s trusted friend' },
          { name: 'Mutant Toys', kind: 'The product of Sid&rsquo;s twisted', trait: 'Truly selfless and gentle at the core' },
          { name: 'Jessie', kind: 'Cowgirl toy', trait: 'Yodel song or cowgirl&quot;s unique chants when they have time' },
          { name: 'Bullseye', kind: 'Horse toy', trait: 'Rides like the wind, when it&rsquo;s Woody giving the command' },
          { name: 'Mrs. Potato Head', kind: 'Toy with a potato-shaped face', trait: '&quot;Angry eyes&quot; handy for the rescue mission, just in case'},
          { name: 'Wheezy', kind: 'Squeak-toy penguin', trait: 'Relegated to the dusty top shelf in Andy&rsquo;s room' },
          { name: 'Stinky Pete', kind: 'Prospector toy', trait: 'Big, old Prospector toys with an unopened box' },
          { name: 'Emperor Zurg', kind: 'Emperor figure', trait: 'Run quest to defeat enemy Buzz Lightyear' },
          { name: 'Lotso', kind: 'Teddy bear toy', trait: 'Smells like sweet strawberries' },
          { name: 'Ken', kind: 'Male doll', trait: 'A swinging bachelor who&rsquos always on the lookout for fun' },
          { name: 'Buttercup', kind: 'Unicorn doll', trait: 'Cuddly unicorn features velvety-soft, snow-colored fur' },
          { name: 'Dolly', kind: 'Dress-up rag doll', trait: 'Purple hair, googly eyes, and gently blushing cheeks' },
          { name: 'Mr. Pricklepants', kind: 'Plush toy', trait: 'Charming lederhosen-wearing hedgehog' },
          { name: 'Peas-In-A-Pod', kind: 'Pea-shaped toy', trait: 'Making it perfect for the car or stroller' },
          { name: 'Big Baby', kind: 'Baby doll', trait: 'Dazzling blue eyes that open and close' },
          { name: 'Chunk', kind: 'Battery-powered figure', trait: 'Fists are ready to smash whatever enemy gets in his way' },
          { name: 'Stretch', kind: 'Sticky octopus doll', trait:'Fun-loving under-the-sea octopus' },
          { name: 'Twitch', kind: 'Action figure', trait: 'Stands over five inches tall, with more than 15 points of articulation' },
          { name: 'Barbie', kind: 'Barbie doll', trait: 'Drive a car and guide the store' },
          { name: 'Bo Peep', kind: 'Female figure with joints', trait: 'Long-lost friend of Woody, Buzz and the gang' },
          { name: 'Forky', kind: 'Actual spork-turned-craft-project', trait: 'Every time he tries to get away' },
          { name: 'Gabby Gabby', kind: 'Talking pull-string doll', trait: 'Spent more than 60 years forgotten in the depths of a jam-packed antique store' },
          { name: 'Ducky and Bunny', kind: 'Furry bunny doll', trait: 'They&rsquo;re connected and inseparable' },
          { name: 'Giggle McDimples', kind: 'Miniature plastic doll', trait: 'Bo&rsquo;s confidant, supporter and advisor' },
          { name: 'Duke Caboom', kind: 'Stuntman toy', trait: "Riding his powerful Caboom stunt-cycle" },
          { name: 'Benson', kind: 'Ventriloquist toy', trait: 'Gabby Gabby&rsquo;s right hand' },
          { name: 'Combat Carl', kind: 'Miniature plastic doll', trait: 'Form a trio and look for opportunities to play everywhere' }
        ]
      }
    }) 
  }
  render() {
    this.el.classList.add('characters', 'container-inner')
    this.el.innerHTML = /* html */ `
      <p class="text">
        This is a storage where you can add desired character, as well as modify or delete profiles of added character.<br>
        Click one of the two buttons below to add or delete character.<br>
        Select the checkbox for the character you want to delete, and then click the delete button.
      </p>
      <div class="btn-group">
        <a href="#/newProfile" class="btn">Add character</a>
        <button type="button" class="btn btn--cancel">Delete character</button>
      </div>
      <ul class="character__list"></ul>
    `
    const characterList = this.el.querySelector('.character__list')
    characterList.append(...this.state.characters
      .map(character => new CharacterItem({
        props: {
          name: character.name,
          kind: character.kind,
          trait: character.trait
        }
      }).el)
    )
  }
}