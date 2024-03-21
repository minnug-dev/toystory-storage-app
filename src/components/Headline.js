import { Component } from "../core/base"

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1 class="title">
        My&nbsp;<span class="logo--black"></span>&nbsp;Character&nbsp;&nbsp;Storage
      </h1>
    `
  }
}