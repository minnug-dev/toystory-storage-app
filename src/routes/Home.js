import { Component } from "../core/base";
import Headline from "../components/Headline";
import CharacterList from "../components/CharacterList";
import Search from "../components/Search";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const characterList = new CharacterList().el;
    const search = new Search().el;

    this.el.classList.add('container');

    this.el.append(
      headline,
      search,
      characterList
    );
  }
}