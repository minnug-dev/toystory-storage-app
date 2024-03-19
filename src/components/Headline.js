import { Component } from "../core/heropy"

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        My&nbsp;<span class="logo--black"></span>&nbsp;Characters&nbsp;&nbsp;Storage
      </h1>
    `
  }
}