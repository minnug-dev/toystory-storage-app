import { Component } from "../core/base";

export default class Header extends Component {
  constructor() {
    super({
      tagName:'header', 
    });
  }
  render() {
    this.el.classList.add('header');
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo"></a>
    `;
  }
}