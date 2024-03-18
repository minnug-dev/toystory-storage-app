import { Component } from "../core/heropy"

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        My <span class="logo--black"></span>Characters Storage
      </h1>
    `
  }
}