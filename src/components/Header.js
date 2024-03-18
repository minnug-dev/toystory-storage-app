import { Component } from "../core/heropy"

export default class Header extends Component {
  constructor() {
    super({
      tagName:'header', 
    })
  }
  render() {
    this.el.classList.add('header')
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo"></a>
    `
  }
}