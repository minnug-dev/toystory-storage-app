import { Component } from "../core/base";
import Headline from "../components/Headline";
import Search from "../components/Search";
import CharacterList from "../components/CharacterList";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const characterList = new CharacterList().el;

    this.el.classList.add('container');

    this.el.append(
      headline,
      search,
      characterList
    );
  }
}