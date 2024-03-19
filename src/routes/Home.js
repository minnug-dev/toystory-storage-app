import { Component } from "../core/heropy"
import Headline from "../components/Headline"
import CharacterList from "../components/CharacterList"

export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const characterList = new CharacterList().el

    this.el.classList.add('container')

    this.el.append(
      headline,
      characterList
    )
  }
}